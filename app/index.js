const express = require('express');
const app = express();

app.use(express.json());
// set CORS headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Acess-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Acess-Control-Allow-Headers', 'Content-Type,');
	next();
});

module.exports = app;
