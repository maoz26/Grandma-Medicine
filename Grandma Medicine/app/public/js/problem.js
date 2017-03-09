var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	user: 'Livne',
	};

	grandmaApp.run(function ($http) {
	console.log('Hey');


	/**
	* Get Request Parameters
	*/
	var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
	var values = parameter.split("=");
	console.log('incoming values: ' + values); // will return and array as ["name", "sample"] 
	var query = values[1];

	$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getAreaProblems/"+query).success(function (data) {
		console.log('entered browser request: ' + data);
		model.items = data;
		model.herbalname = data.area;

		model.issues = data.issues;
		//console.log("inside items: " + model.items[0].desc);
	}).error(function (data, status, headers, config) {
        alert("error" + data + status);
        return status;
	});
});


grandmaApp.controller('ProblemCtrl', function($scope) {
	$scope.herbals = model;	
});

