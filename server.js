// DEPENDENCIES

var express = require('express');
var bodyParser = require('body-parser');

// EXPRESS CONFIGURATION

var app = express(); // Tells node that we are creating an "express" server
var httpPort = process.env.PORT || 8000; 

var staticContentFolder = __dirname + '/public';

app.use(express.static(staticContentFolder));  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//router

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//listener

app.listen(httpPort, function() {
	console.log("App listening on PORT: " + httpPort);
});