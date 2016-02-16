( function() {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.controller('ReservationController', [ 'ReservationService', ReservationController ]);

	function ReservationController (Reservation) {
		var vm = this;
		vm.resName = '';
		vm.startDate = '';
		vm.endDate = '';

		vm.futureResArr = new Array();

		vm.isConfirm = true;
		vm.isPay = true;

		vm.checkRes = checkRes;
		vm.confirmRes = confirmRes;

		function getFutureReservation () {
			Resrevation.getFuture().$promise().then(
				function (data) {
					vm.futureResArr = data;
				});
		}

		function checkRes () {
			// Check the DB to see if that reservation is clear
			Reservation.getAll().$promise().then(
				function (data, err) {

				});

		}

		function confirmRes () {
			// Process payment
			// Submit the reservation to the DB
			// Email the user with a confirmation
		}
	}

})();