//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();

console.log(obj)*/



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB Server');
  //Delete Many

   /*db.collection('Todos').deleteMany({text:'Walk the Dog!!'}).then((result)=> {
   		console.log(result);
   });*/


  //DeleteOne

   db.collection('Todos').deleteOne({text:'Something to Do'}).then((result)=> {
   		console.log(result);
   });
  //FindOndAnd Delete
	//db.close();
});
