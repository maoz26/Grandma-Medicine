var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	user: 'Livne',
	};
	
	grandmaApp.run(function ($http) {

	/**
	* Returns Random Daily Tip
	*/
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getDailyTip").success(function (data) {
			console.log('entered browser request: ' + data);
			model.tip = data;
			//console.log('specific_herbal: ' +specific_herbal.title);
			}).error(function (data, status, headers, config) {
			       alert("error" + data + status);
			       return status;
			});
		

	});


grandmaApp.controller('TipCtrl', function($scope) {
	$scope.herbals = model;
});

