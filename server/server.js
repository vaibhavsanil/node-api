//require('./config/config');

var env = process.env.NODE_ENV || 'development';

//console.log('env *****', env);

if(env === 'development'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';

}else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
 }






const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');


var app = express();
//const port = process.env.PORT || 3000 ;
const port = process.env.PORT ;


app.use(bodyParser.json());

//pp.use(bodyParser.urlencoded({ extended: true }));


app.post('/todos', (req,res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos',(req, res) =>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
		res.status(400).send(e);
	})
});


app.get('/todos/:id',(req, res) =>{
	var id = req.params.id

	// Valid id using is valid
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});

});

app.delete('/todos/:id',(req, res)=>{
	var id = req.params.id

	//Validate ID

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.patch('/todos/:id',(req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text','completed']);

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false ;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body},{new:true}).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	})
});

// POST /users

app.post('/users',(req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);//Why we pass the body here

	user.save().then(() => {
		return user.generateAuthToken();

		//res.send(user);
	}).then((token) => {

		res.header('x-auth', token).send(user);
		//console.log(token);
	}).catch((e) => {
		res.status(400).send(e);
		 console.log(e);
	})
});




app.get('/users/me',authenticate,(req,res) => {
	res.send(req.user);
});

// POST /users/login {email, password}

app.post('/users/login', (req, res) => {
	var body = _.pick(req.body, ['email','password']);

	User.findByCredentials(body.email, body.password).then((user) => {
		//res.send(user);
		return user.generateAuthToken().then((token) => {
			res.header('x-auth',token).send(user);
		});
	}).catch((e)=>{
		res.status(400).send();
	});
	
});



app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};
