// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) 
{

	// Total list of friend entries
    app.get('/api/friends', function(req, res) 
    {
		res.json(friends);
	});

	// POST new friend entry to the api
    app.post('/api/friends', function(req, res) 
    {
		// Capture the user inputs into an object
		var userInput = req.body;

        // Capture and store the score for each userInput
		var userResponses = userInput.scores;

        // A variable to grab friend match name
        var matchName = '';
        
        // a variable to grab friend match imagexdr6
        var matchImage = '';
        
        // totalDifference initialzed a big value for comparsion
		var totalDifference = 10000; 

		// Examine all existing friends in the list to determine best match
        for (var i = 0; i < friends.length; i++) 
        {
			// Variable differences initialed at zero
            var differences = 0;
            
            // Loop through user responses and scores with friends and determine the differences
            for (var j = 0; j < userResponses.length; j++) 
            {
				differences += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
		
			// If statement to record the lowest differences between individuals
            if (differences < totalDifference) 
            {
				totalDifference = differences;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new userInput to friends array
		friends.push(userInput);

		// Send appropriate response to user if a match is found
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};