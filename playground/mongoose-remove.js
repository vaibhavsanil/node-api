const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//todo findOneAndRemove
//todo findByIdAndRemove

Todo.findOneAndRemove({_id:'5c18b67fdf676e2fc7a7a5b5'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5c18b67fdf676e2fc7a7a5b5').then((todo) => {
	console.log(todo);
});