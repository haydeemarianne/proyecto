function IncidenciaRepo(ServerFake) {

	function getWhereReporterId(id) {
		var data = [];
		return ServerFake.ok({data: data})();
	}

	function getByStatusName(statusName) {
		var data = require('./../api/incidencias');
		return ServerFake.ok({data: data})();
	}

	return {
		getWhereReporterId: getWhereReporterId,
		getByStatusName: getByStatusName
	}


}

module.exports = {
	name: 'IncidenciaRepo',
	func: IncidenciaRepo
}