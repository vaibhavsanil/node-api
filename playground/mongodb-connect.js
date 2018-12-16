//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();

console.log(obj)*/



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB Server');

/*	db.collection('Todos').insertOne({
		text:'Something to Do',
		completed:false
	},(err,res) => {
		if (err) {
			return console.log('Unable to insert todo!!', err);
		}
		console.log(JSON.stringify(res.ops, undefined, 2));

	});*/

	/*db.collection('Users1').insertOne({
		name : 'Vaibhav Sanil',
		age : 23,
		location: 'Bangalore'

	},(err,res) => {

		if(err) {
			return console.log('Unable to insert todo',err);
		}

		//console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));

		console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));

	});*/

/*	db.collection('Todos').insertOne({
		text : 'Something to do',
		completed: false
	},(err,res) => {

		if(err) {
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));

	});
*/

	//Insert new doc into Users (name,age,location)

	/*MongoClient.connect('mongodb://localhost:27017/Users',(err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB Server');

	db.collection('Users').insertOne({
		name : 'Vaibhav Sanil',
		age : 23,
		location: 'Bangalore'

	},(err,res) => {

		if(err) {
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));

	});

*/


	db.close();
});
