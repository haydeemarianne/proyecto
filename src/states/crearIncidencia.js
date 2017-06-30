function crearIncidencia($stateProvider) {

	$stateProvider.state('crearIncidencia', {
		url: '/crear-incidencia',
		controller: function($scope, IncidenciaFactory) {

			$scope.createIncidencia = createIncidencia;

			function createIncidencia(dataForm) {

				IncidenciaFactory.create(dataForm)
					.then(laIncedenciaFueCreadoConExito)
					.catch(seProdujoUnErrorAqui)

				console.log(dataForm);
			}

			function laIncedenciaFueCreadoConExito() {
				console.log('laIncedenciaFueCreadoConExito');
			}

			function seProdujoUnErrorAqui(error) {
				console.log('seProdujoUnErrorAqui');
			}

		},
		template: `
		<main-layout title="{{'Crear Incidencia'}}">
			
			<div class="row">
	   			<div class="col-xs-6 col-xs-offset-2">
	   				<div class="panel panel-default">
					  <div class="panel-body">
					  	<create-inicidencia-form 
					  		on-submit="createIncidencia(dataForm)">
					  	</create-inicidencia-form>
					  </div>
					</div>
	   			</div>
	   		</div>

		</main-layout>

		`

	});

}

module.exports = crearIncidencia;