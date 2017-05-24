function ServerFake($q, $timeout) {

	var SUCCESS_RESPONSE = 'SUCCESS_RESPONSE';
	var ERROR_RESPONSE = 'ERROR_RESPONSE';

	function fail(responseFail) {
		return function() {
			return fake(ERROR_RESPONSE, {}, responseFail);
		}
	}

	function ok(responseOk) {
		return function() {
			return fake(SUCCESS_RESPONSE, responseOk, {});
		}
	}

	function fake(success, successResponse, failResponse) {

		var defer = $q.defer();

		$timeout(function() {
			
			if(success === SUCCESS_RESPONSE)
				defer.resolve(successResponse);
			else
				defer.reject(failResponse);

		}, 100);
	
		return defer.promise;

	}

	return {
		fail: fail,
		ok: ok
	}

}


module.exports = {
	name: 'ServerFake',
	func: ServerFake
}