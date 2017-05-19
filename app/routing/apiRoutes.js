var friends=require("../data/friends.js");
module.exports=function(app){
app.get('api/friends',function(req, res){
res.json(friends);
 })
app.post('api/friends',function(req, res){var bestMatch={
};
var userData = req.body;
var userScores = userData.scores;
var totalDifference =0;
for (var i = 0; i < userData.length; i++) {
	totalDifference =0;
	for (var j = 0; j < userScores.length; j++) {
		totalDifference = totalDifference + Math.abs(parsInt(userScores[j])-parseInt(friends[i].scores[j]));
		if (totalDifference<=bestMatch.friendDifference){
		bestMatch.name= friends[i].name;
		bestMatch.photo= friendDifference[i].photo;
		bestMatch.friendDifference = totalDifference;}
	}

	friends.push()
	res.json()
}
})
}