const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Acess-Control-Allow-Methods', '*');
	res.setHeader('Acess-Control-Allow-Headers', 'Content-Type');
	next();
});
