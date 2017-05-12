var express = require ('express');
var app = express();
var PORT = 8080;
var middleware = {
	requireAuthentication : function (req, res, next){
		var a = 5, b =10, c= a + b ;
		console.log ('Private Route Hit');
		console.log (c);
		next();
	},
	logger : function (req, res , next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' '+ req.originalUrl);
		next();
	}
}

// app.get('/', function(req, res){
// 	res.send('hello Express');
// });

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("Express Server Started On Port " + PORT +" !");
});
