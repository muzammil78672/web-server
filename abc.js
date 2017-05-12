var express = require ('express');
var app = express();
var PORT = 8181;

app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About Us');

app.listen(PORT, function(){
	console.log("Express Server Started On Port " + PORT +" !");
});