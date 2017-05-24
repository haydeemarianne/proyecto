function AsignarAnalistaToInicidenciaHandler(ServerFake) {
	return {
		handle: handle
	}

	function handle(command) {
		var callServerFake =  ServerFake.ok({data: command});
		return callServerFake();
	}
}

module.exports = {
	name: 'AsignarAnalistaToInicidenciaHandler',
	func: AsignarAnalistaToInicidenciaHandler
}