var express = require ('express');
var app = express();
var PORT = 8080;
var middleware = require("./middleware.js");

// app.get('/', function(req, res){
// 	res.send('hello Express');
// });

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("Express Server Started On Port " + PORT +" !");
});
