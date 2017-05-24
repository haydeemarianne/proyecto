function mostrarDetallesIncidencia($stateProvider) {

	$stateProvider.state('mostrarDetallesIncidencia', {
		url: '/mostrar-detalles-incidencia/:incidenciaId',
		resolve: {
			incidencia: function() {
				return require('./../api/incidencias')[0];
			}
		},
		controller: function($scope, incidencia) {
			$scope.incidencia = incidencia;
		},
		template: `
		<main-layout title="{{'Ver Incidencia'}}">
			
			<div class="row">
	   			<div class="col-xs-6">
	   				<div class="panel panel-default">
						<div class="panel-body">
					  		<mostrar-detalle-incidencia-form 
					  			incidencia="incidencia">
					  		</mostrar-detalle-incidencia-form>
						</div>
					</div>
	   			</div>
	   		</div>

		</main-layout>
		`
	});

}

module.exports = mostrarDetallesIncidencia;