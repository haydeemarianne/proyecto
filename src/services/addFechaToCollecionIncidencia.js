function addFechaToCollecionIncidencia() {

	return function(incidencias) {
		return incidencias.map(mapCb);
	}

	function mapCb(incidencia) {

		var logFilter = incidencia.logs.filter(function(log) {
			return log.name == incidencia.status.name;
		});

		if(logFilter.length == 0) throw "addFechaToCollecionIncidencia-27";

		return setFecha(incidencia, logFilter[0]);

	}

	function setFecha(incidencia, log) {

		var diccionario = {
			CREADO: 'Fecha Creacion:',
			ASIGNADO: 'Fecha Asignacion:',
			TERMINADO: 'Fecha Culminacion:',
			APROBADO: 'Fecha Aprobacion:',
			REPROBADO: 'Fecha Reprobacion:'
		}

		incidencia.fecha = {
			contenido: log.fecha,
			label: diccionario[log.name]
		}


		return incidencia;
	}
}

module.exports = {
	name: 'addFechaToCollecionIncidencia',
	func: addFechaToCollecionIncidencia
};