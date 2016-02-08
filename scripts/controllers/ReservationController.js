( function() {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.controller('ReservationController', ReservationController);

	function ReservationController () {
		var vm = this;
		vm.resName = '';
		vm.startDate = '';
		vm.endDate = '';
	}

})();