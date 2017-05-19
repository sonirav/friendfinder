//+++++++++++ Required to make server
var express=require("express");
var bodyParser=require("body-parser");
var path = require("path");
//***********************Defineing Server and Port*****************
var var port = process.env.PORT || 3000;
var app=express();
//------------- 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
/*get("/", function(req, res) {res.sendFile(path.join(__dirname, "./app/htmlRoutes/home.html"));
});
get("/survey", function(req, res) {res.sendFile(path.join(__dirname, "./app/survey/home.html"));
});*/
// Starts the server to begin listening
// ============================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



