const app = require('./index');
const config = require('./config');
const { mongoConnect } = require('./database');

mongoConnect(() => {
	app.listen(config.express.port);
});
