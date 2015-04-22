(function () {
	'use strict';

	angular

		.module('module1', [])

		.controller('moduleCtrl', ["$scope", function ($scope) {
			$scope.test = "Test form module ctrl";
		}])

	;
}());