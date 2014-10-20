'use strict'

angular.module('myApp.ForEx',[])

.factory('ForEx',function ($http) {
	var CURRENCYAPI='http://openexchangerates.org/api/latest.json?app_id=887afbe0845f4b388a2b1066bb125bd5',
		CURRENCYNAMES='http://openexchangerates.org/api/currencies.json',
		RATEFREQUENCY=360*60*1000, //one hour of milliseconds
	    calledapi=false,
	    currencystatus={status:0, message:"api has not been called"},
	    allrates=null,
	    iscurrentrate=function() {
	    	if(calledapi&&allrates)
	    	{
	    		if(allrates.timestamp<((new Date())+RATEFREQUENCY))
	    		{
	    			return(true)
	    		}
	    	}
	    	return(false);
	    },
	    getlatestfromnet=function(callback){
			$http.get(CURRENCYAPI).success(function(data, status, headers, config) {
						    // this callback will be called asynchronously
						    // when the response is available
						    allrates=data;
						    currencystatus={status:1,message : "retrieved exchange rates at"+allrates.timestamp.toString()};
                            if (typeof(callback)=="function")   callback(data);
						    calledapi=true;
						  }).
						  error(function(data, stat, headers, config) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    currencystatus={status:stat,message: "call failed with an error: "+status.toString()};
						  });
						};

	return {
		iscurrent : iscurrentrate,
		hasbeencalled : function() {return(calledapi);},
		getstatus : function() {return currencystatus;},
		getlatest : getlatestfromnet,
		getallrates : function(){
			var newrates=null;
			if(calledapi&&(allrates!=null)&&iscurrentrate()) {
				return(allrates);
			} else {
				// try again to get all the rates
				calledapi=false;
				getlatestfromnet(function(data){
					calledapi=true;
					newrates=data;
				});
				return(currencystatus);
			};
        },
        iserrorstatus : function(curstat) {
        	if (!angular.isDefined(curstat)||(!angular.isDefined(curstat.status)&&!(curstat.status==1))) {
        			return(true);
        		}
        	return(false);

        	},
		getdollartocedi : function(){
				if(calledapi&&(allrates!=null)) {
					var dtoc=(1/allrates.rates['GHS']);
					if(dtoc!=null) {
						return({ rate: dtoc, asof : allrates.timestamp});
					} else {
						return({status :2, message: "CEDI exchange rate not available"});
					} 

				}
			}
		 }  // return ForEx Service
});  // factory
