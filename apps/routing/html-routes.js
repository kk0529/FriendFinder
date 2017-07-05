//dependencies

var path = require('path');

//routing

module.exports = function(app){

    //html get request
	app.get('/survey', function(req, res){
       
       res.sendFile(path.join(__dirname + '/../public/survey.html'));

	});

	//if no match, route is found default to home
	app.use(function(req, res){

		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});


}