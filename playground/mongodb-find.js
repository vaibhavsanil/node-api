//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();

console.log(obj)*/



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB Server');

	/*db.collection('Todos').find({
		_id: new ObjectID('5c16671fb8457c2425624e53')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined, 2));

	}, (err) => {
		console.log('Unable to fetch todos',err);
	});
*/
    db.collection('Users1').find().toArray().then((docs) => {
		console.log('User1');
		console.log(JSON.stringify(docs,undefined, 2));

	}, (err) => {
		console.log('Unable to fetch todos',err);
	});


	//db.close();
});
