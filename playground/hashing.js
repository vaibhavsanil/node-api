const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongoose');

/*var message = 'My name is Vaibhav';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);*/

var data = {
	    "_id" : "5c21d75ef0c590a878b24dc7",
	    "email" : "vaibhav45@ssmsinfotech.com",
	    "password" : "aabc!123",
	    "tokens" : [
	        {
	            "access" : "auth",
	            "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzIxZDc1ZWYwYzU5MGE4NzhiMjRkYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ1NzIxNjk0fQ.68P8q014nwXtNatXEUBUNHlleQOqGD53L_Fz4qkK6e0",
	            "_id" : ObjectId("5c21d75ef0c590a878b24dc8")
	        }
	    ],
	    "__v" : 1

};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('decoded',decoded);

/*var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}
token.data.id = 5;
token.hash =SHA256(JSON.stringify(token.data)).toString();


var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
if(resultHash === token.hash) {
	console.log('Data was not changed');
}else {
	console.log('Data was changed Do Not trust !');
}*/
