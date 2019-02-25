var express = require('express');
var router = require('./routes/router');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.listen(3000, function(){
	console.log('port 3000')
});