( function() {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.controller('ReservationController', ['pg', ReservationController]);

	function ReservationController (pg) {
		var vm = this;
		vm.resName = '';
		vm.startDate = '';
		vm.endDate = '';

		vm.checkRes = checkRes;
		vm.confirmRes = confirmRes;

		function checkRes () {
			// Check the DB to see if that reservation is clear
			

		}

		function confirmRes () {
			// Process payment
			// Submit the reservation to the DB
			// Email the user with a confirmation
		}
	}

})();