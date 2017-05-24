function IncidenciaFactory($http, ServerFake) {

	var http = $http;
	var env = require('./../env');

	this.create = ServerFake.fail({errorMessage: 'djfsdkfsdfsd'});

	function create(dataForm) {
		return http.$post(env.url('incidencia'), {
			titulo: dataForm.titulo,
			descripcion: dataForm.descripcion
		});
	}
}

module.exports = {
	name: 'IncidenciaFactory',
	func: IncidenciaFactory
}