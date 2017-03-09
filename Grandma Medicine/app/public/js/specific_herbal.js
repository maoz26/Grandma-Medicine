var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	user: 'Livne',
	};

		/**
	* Get Request Parameters
	*/
	var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
	var values = parameter.split("=");
	console.log('incoming values: ' + values); // will return and array as ["name", "sample"] 
	var query = values[0]; // Gives us or herbal or nothing

	grandmaApp.run(function ($http) {

	/**
	* Returns Specific Herbal
	*/
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getSpecificHerbal/" + values[1] ).success(function (data) {
			console.log('entered browser request: ' + data);
			model.specific_herbal = data;
			console.log('qualities: ' +data.qualities);
			}).error(function (data, status, headers, config) {
			       alert("error" + data + status);
			       return status;
			});
		

	});


grandmaApp.controller('SpecHerbalCtrl', function($scope) {
	$scope.herbals = model;
});

