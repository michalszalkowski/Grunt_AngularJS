(function () {
	'use strict';

	angular

		.module('app', [
			'module1'
		])

		.controller('someCtrl', ["$scope", function ($scope) {
			$scope.test = "Test form app ctrl";
		}])

	;
}());