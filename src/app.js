var angular = require('angular');
var factory = require('./core/ModuleFactory');
var LoaderState = require('./core/LoaderState');

factory.create(angular, {
	name: 'app',
	dependencies: [
		require('angular-bootstrap-npm'),
		require('angular-ui-router')
	],
	directives: [
		require('./directives/loginForm'),
		require('./directives/navbar'),
		require('./directives/sidebar'),
		require('./directives/contentPage'),
		require('./directives/createInicidenciaForm'),
		require('./directives/mainLayout'),
		require('./directives/incidenciaItem'),
		require('./directives/mostrarDetalleIncidenciaForm'),
		require('./directives/analistaItemList')
	],
	services: [
		require('./factories/IncidenciaFactory'),
	],
	factories: [
		require('./core/ServerFake'),
		require('./repositories/IncidenciaRepo'),
		require('./services/addFechaToCollecionIncidencia'),
		require('./services/AsignarAnalistaToInicidenciaHandler')
	],
	components: [
		
	],
	config: function($stateProvider) {

		var states = [

			require('./states/initial'),
			require('./states/crearIncidencia'),
			require('./states/mostrarIncidenciasReporter'),
			require('./states/mostrarDetallesIncidencia')

		];

		LoaderState.load(states, $stateProvider);

	}
});