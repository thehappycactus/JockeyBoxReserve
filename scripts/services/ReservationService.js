( function () {
	'use strict';

	angular
		.module('JockeyBoxResApp')
		.factory('ReservationService', [ '$resource', ReservationService ]);

	function ReservationService($resource) {
		return $resource(
			'/reservations'
			[],
			{
				getAll: {
					method: 'GET',
					isArray: true
				},
				getFuture: {
					method: 'GET',
					url: '/reservations/future',
					isArray: true
				}
			});
	}
})();