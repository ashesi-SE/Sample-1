var http=require('http'),
    fs=require('fs'),
    request=require('request');

var CURRENCY= {
	LATEST : 'http://openexchangerates.org/api/latest.json?app_id=887afbe0845f4b388a2b1066bb125bd5',
	NAMES :'http://openexchangerates.org/api/currencies.json',
	GetLatest : function(complete){
		request(CURRENCY.LATEST,function(error,response,body){
			if(!error&&response.statusCode==200)
			{
				console.log("request to openexchangrates succeded")
				console.log(body);
				complete(body);
			}
		}); //request
	  } // get latest
	};
  http.createServer(function(request, response) {
		  console.log("URI: "+request.url);
		  if(request.url=="/latest")
		  {
			  	CURRENCY.GetLatest(function(body){
	 			response.writeHead(200, {"Content-Type": "text/plain"});
				response.write(body);
			  	response.end();
		  	});
		  } else {
		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write("Hello World");
		  response.end();
		  }
}).listen(8888);
console.log('listening on port 8888');