// Pull in required dependencies for app
var path = require('path');

// set-up routes to be exported 
module.exports = function(app) 
{
	// Get the home.html page
    app.get('/', function(req, res)
     {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Get the survey.html page
    app.get('/survey', function(req, res) 
    {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};