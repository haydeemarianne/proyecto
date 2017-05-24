function mostrarIncidenciasReporter($stateProvider) {
	$stateProvider.state('mostrarIncidenciasReporter', {
		url: '/mostrar-incidencias-reporter/:reporterId',
		controller: function($scope, $state, addFechaToCollecionIncidencia, IncidenciaRepo) {

			function init() {
				getByStatusName('CREADO');
			}

			init();

			$scope.transitionToMostrarDetallesIncidencia = function(incidenciaInput) {
				console.log('transitionToMostrarDetallesIncidencia', incidenciaInput);
				//$state.go('mostrarDetallesIncidencia', { incidenciaId: incidenciaInput.id});
			}

			$scope.removeIncidencia = function(incidenciaInput) {
				
				$scope.incidencias = $scope.incidencias.filter(function(incidencia) {
					return incidencia.id != incidenciaInput;
				});
			}

			$scope.getByStatusName = getByStatusName;
	
			function getByStatusName(name) {
				IncidenciaRepo.getByStatusName(name)
					.then(setIncidencias)
					.catch();
			}

			function setIncidencias(response) {
				$scope.incidencias = addFechaToCollecionIncidencia(response.data);
			}

		},
		template: `
		<main-layout title="{{'Mis Incidecias'}}">

			<div class="row">
				<div class="col-xs-12">
					<div class="pull-right">
						<div class="btn-group" role="group" aria-label="...">
				  			<button 
				  				type="button" 
				  				class="btn btn-default" 
				  				ng-click="getByStatusName('ddd')">En Espera
			  				</button>
				  			<button 
				  				type="button" 
				  				class="btn btn-default" 
				  				ng-click="getByStatusName('rr')">En Ejecucion
			  				</button>
				  			<button 
				  				type="button" 
				  				class="btn btn-default" 
				  				ng-click="getByStatusName('hh')">Terminadas
			  				</button>
				  			<button 
				  				type="button" 
				  				class="btn btn-default" 
				  				ng-click="getByStatusName('ññ')">Aprobadas
			  				</button>
				  			<button 
				  				type="button" 
				  				class="btn btn-default" 
				  				ng-click="getByStatusName('ee')">Reprobadas
			  				</button>
						</div>
					</div>
				</div>
			</div>

			<div class="row" style="margin-top: 15px;">

				<div class="col-xs-12">

					<incidencia-item ng-repeat="incidencia in incidencias track by incidencia.id"
						titulo="{{incidencia.titulo}}"
						incidencia-id="{{incidencia.id}}"
						hide-remove-button="false"
						hide-show-button="false"
						fecha-contenido="{{incidencia.fecha.contenido}}"
						fecha-label="{{incidencia.fecha.label}}"
						on-remove="removeIncidencia(incidenciaInput)"
						on-show="transitionToMostrarDetallesIncidencia(incidenciaInput)">
					</incidencia-item>
					
				</div>

			</div>

		</main-layout>
		`
	});
}

module.exports = mostrarIncidenciasReporter;

