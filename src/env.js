var urlBase = 'http://localhost/laravel/public/api/';


module.exports = {
	url: function(endPoint) {
		return urlBase.concat(endPoint);
	}
}