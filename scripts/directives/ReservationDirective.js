( function() {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.directive('tbgReservation', ReservationDirective);

	function ReservationDirective() {
		return {
			restrict: 'E',
			templateUrl: 'views/reservation-view.html',
			controller: 'ReservationController',
			controllerAs: 'resCtrl'
		};
	}
})();