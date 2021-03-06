'use strict'

angular.module('myApp.ForEx',[])

.factory('ForEx',function ($http) {
	var CURRENCYAPI='http://openexchangerates.org/api/latest.json?app_id=887afbe0845f4b388a2b1066bb125bd5',
		CURRENCYNAMES='http://openexchangerates.org/api/currencies.json',
	    calledapi=false,
	    currencystatus="api has not been called",
	    allrates=null;

	return {
		getlatest : function(callback){
			$http.get(CURRENCYAPI).success(function(data, status, headers, config) {
						    // this callback will be called asynchronously
						    // when the response is available
						    allrates=data;
                            callback(data);
						    calledapi=true;
						  }).
						  error(function(data, status, headers, config) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    calledapi=true;
						    currencystatus="call failed with an error: "+status.toString();
						  });
						},
		getallrates : function(){
			if(calledapi&&(allrates!=null)) {
				return(allrates);
			} else {
				return(currencystatus);
			};
        },
		getdollartocedi : function(){
				if(calledapi&&(allrates!=null)) {
					var dtoc=allrates.rates['GHS'];
					if(dtoc!=null) {
						return({ rate: dtoc, asof : allrates.timestamp});
					} else {return("CEDI exchange rate not available");} 

				}
			}
		 }
});
