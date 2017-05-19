//+++++++++++ Required to make server
express=require("express");
path=require("path");
bodyParser=require("body-parser");

//***********************Defineing Server and Port*****************
PORT=3000;
app=express();
//------------- 

app.use(bodyParser.json());
//----------------- Seed Data
var friends=[{
	name:"Ravinder Soni",
	photo:"http://picture1",
	q1:"2",
	q2:"4",
	q3:"5",
	q4:"1",
	q5:"2",
	q6:"2",
	q7:"4",
	q8:"5",
	q9:"1",
	q10:"2"
},
{
	name:"Alisha",
	photo:"http://picture2",
	q1:"2",
	q2:"5",
	q3:"3",
	q4:"1",
	q5:"2",
	q6:"5",
	q7:"4",
	q8:"5",
	q9:"2",
	q10:"2"
},
{
	name:"Trisha",
	photo:"http://picture4",
	q1:"2",
	q2:"2",
	q3:"3",
	q4:"1",
	q5:"4",
	q6:"5",
	q7:"4",
	q8:"3",
	q9:"5",
	q10:"1"
}]
// Routing of the requests
//res -- it is response to the request from the client
//req -- it is the request to get data from the client which mostly responded with res
var newRouts = require("./routing/apiRouts.js"); 
console.log(newRouts);
app.get(newRouts.rout1[0],(function(req, res){
res.sendFile(path.join(__dirname,newRouts.rout1[1]))
  }));

app.get(newRouts.rout2[0],(function(req, res){
res.sendFile(path.join(__dirname,newRouts.rout2[1]))
  }));
app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;

});
// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  var newfriends = req.body;
  newfriends.routeName = friends.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriends);

  friends.push(newfriends);

  res.json(newfriends);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



