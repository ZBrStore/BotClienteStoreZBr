const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	return res.redirect(
		'https://github.com/ZBrStore/BotClienteStoreZBr/releases',
	);
});

module.exports = app;
