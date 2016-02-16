( function () {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.factory('ReservationService', [ '$resource', ReservationService ]);

	function ReservationService($resource) {
		return $resource(
			'/reservations/future',
			[],
			{
				get: {
					method: 'GET',
					isArray: true
				}
			});
	}
})();