const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6c188e0b4fb6a57718c63c641';
var id_user = '5c189e1c01343d160519795e'

/*if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}
*/
/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});*/
/*
Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('Id not found!')
	}
	console.log('Todo by id', todo);
}).catch((e) => console.log(e));*/


User.findById(id_user).then((user) => {
	if(!user) {
		return console.log('User not found!')
	}
	console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
