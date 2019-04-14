const mongodb = require('mongodb');
const config = require('./config');
// create mongodb client
const mongoClient = mongodb.MongoClient;

// ref to the db
let _db;
// create a connect function
const mongoConnect = async callback => {
	try {
		const client = await mongoClient.connect(config.mongodb.uri, {
			useNewUrlParser: true
		});
		if (client) {
			// get db ref
			_db = client.db();
			callback();
		}
	} catch (err) {
		throw err;
	}
};
// returns database ref
const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No database found!';
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
