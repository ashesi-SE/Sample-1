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
	  }, // get latest
	GetUTCDTFilename : function(cd){
		// constructs a filename of type YYYY-M-D!H-M-S
		return(cd.getUTCFullYear().toString()+"-"+(cd.getUTCMonth()+1).toString()+"-"+cd.getUTCDate().toString()+
			   "!"+cd.getUTCHours().toString()+"-"+cd.getUTCMinutes().toString()+"-"+cd.getUTCSeconds().toString());
	},
	WriteCurrencyFile: function(exchangetext){
				var curr=JSON.parse(exchangetext);
				console.log("timestamp:"+curr.timestamp+" type:"+typeof(curr.timestamp));

				var currtime=new Date(Date(curr.timestamp));
				console.log("currtime:"+currtime+" type:"+typeof(currtime));
				var currtimefile=this.GetUTCDTFilename(currtime);
				console.log("Writing to"+"rates\\"+currtimefile+".json");
				fs.writeFile("rates\\"+currtimefile+".json",exchangetext, function (err) {
							  if (err) throw err;
							  console.log('It\'s saved!');
							});
		}  //WriteCurrencyFile
	};
  http.createServer(function(request, response) {
		  console.log("URI: "+request.url);
		  if(request.url=="/latest")
		  {
			  	CURRENCY.GetLatest(function(body){
	 			response.writeHead(200, {"Content-Type": "text/plain"});

				response.write(body);
			  	CURRENCY.WriteCurrencyFile(body);
			  	response.end();
		  	});
		  } else {
		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write("Hello World");
		  response.end();
		  }
}).listen(8888);
console.log('listening on port 8888');