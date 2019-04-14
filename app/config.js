let config = module.exports;
const PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
	port: process.env.PORT || 8080,
	ip: process.env.IP
};

config.mongodb = {
	uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/expense-manager'
};
