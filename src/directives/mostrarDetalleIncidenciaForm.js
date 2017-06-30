function mostrarDetalleIncidenciaForm() {
	return {
		scope: {
			incidencia: '='
		},
		controller: function($scope, $uibModal, AsignarAnalistaToInicidenciaHandler) {

			$scope.deberiaMostrarAnalista = deberiaMostrarAnalista();
			$scope.openSeleccionarAnalistaModal = openSeleccionarAnalistaModal;
			$scope.detachAnalista = detachAnalista;

			function deberiaMostrarAnalista() {

				if(isStatusCreado() || haveAnalistaAsignado()) 
					return true;

				return false;
			}

			function isStatusCreado() {
				return false;
			}

			function haveAnalistaAsignado() {
				return false;
			}

			function openSeleccionarAnalistaModal() {
		    	var modalInstance = $uibModal.open({
			      ariaLabelledBy: 'modal-title',
			      backdrop: 'static',
			      keyboard: false,
			      ariaDescribedBy: 'modal-body',
			      template: require('./modals/seleccionarAnalistaModalTemplate.html'),
			      controller: require('./modals/SeleccionarAnalistaModalController'),
			      resolve: {
			      	analistas: function() {
			      		return require('./../api/analistas');
			      	}
			      }

			    });

			    modalInstance.result.then(
			    	closeSeleccionarAnalistaModal,
			    	dismissSeleccionarAnalistaModal
		    	);
			}

			function closeSeleccionarAnalistaModal(analistaSelected) {
				AsignarAnalistaToInicidenciaHandler.handle({
					analistaId: analistaSelected.id,
					incidenciaId: $scope.incidencia.id
				}).then(setAnalistaAsignado)
			}

			function setAnalistaAsignado(response) {
				$scope.deberiaMostrarAnalista = true;
				$scope.analistaAsignado = response.data;
			}

			
			function dismissSeleccionarAnalistaModal(response) {
				console.log(response);
			}

			function detachAnalista() {
				//hago la logica en el server
				$scope.deberiaMostrarAnalista = false;
			}
		},
		template: `
		<form>
			<div class="col-xs-12">
				 <div class="form-group">
				    <label>Titulo de la incidencia:</label>
				    <input type="text" class="form-control" value="{{incidencia.titulo}}" disabled>
				  </div>
				  <div class="form-group">
				    <label>Descripcion de la incidencia:</label>
				    <textarea class="form-control" rows="5" disabled>
				    	{{incidencia.descripcion}}
				    </textarea>
				  </div>
				  <div class="form-group">
				    <label>Reportador:</label>
				    <input 
				    	type="text" 
				    	class="form-control" 
				    	value="Jonh doe" disabled>
			  	</div>
			  	<div ng-switch="deberiaMostrarAnalista">
			  		<div class="form-group" ng-switch-when="true">
					    <div style="font-size: 12px; font-weight: bold; margin-bottom: 5px">
					    	<span class="pull-left">Analista Asignado:</span>
					    	<a href="#" class="pull-right" ng-click="detachAnalista()">
					    		Deshacer Asignacion
					    	</a>
					    	<span class="clearfix"></span>
				    	</div>
					    <input 
					    	type="text" 
					    	class="form-control" 
					    	value="{{analistaAsignado.fullName}}" disabled>
				  	</div>
				  	<div class="form-group" ng-switch-when="false">
				  		<button type="button" 
				  			class="btn btn-info" 
				  			ng-click="openSeleccionarAnalistaModal()">
				  			Asignar Analista
			  			</button>
				  	</div>
			  	</div>
			  	
			  	<div class="form-group">
				    <label>Status:</label><br/>
				    <span class="label label-primary">
				    	
				    </span>
			  	</div>
			</div>
		</form>
		`
	}
}

module.exports = {
	name: 'mostrarDetalleIncidenciaForm',
	func: mostrarDetalleIncidenciaForm
}