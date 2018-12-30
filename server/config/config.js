var env = process.env.NODE_ENV || 'development';

//console.log('env *****', env);


if (env === 'development' || env === 'test'){
	var config = require('./config.json');
	var envConfig = config[env];

	//console.log(Object.keys(evnConfig));
	Object.keys(envConfig).forEach((key) => {
		process.env[key] = envConfig[key];
		console.log(process.env[key])
	});


}
/*if(env === 'development'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = '';

}else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = '';
 }*/

