var express = require("express"),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	router = require("./router.js"),
	session = require('client-sessions'),
	fs = require('fs'),
	app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public', {
	index: false // fix for visiting root domain
}));
app.use(cookieParser("12345"));
app.use(bodyParser());
app.use(session({
	cookieName: 'session',
	secret: '12345'
}));

router(app);

app.listen((process.env.PORT || 3000));