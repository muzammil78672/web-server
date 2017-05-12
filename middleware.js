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

module.exports = middleware;