function createInicidenciaForm() {
	return {
		scope: {
			onSubmit: '&'
		},
		controller: function($scope) {

			$scope.nuevaIncidencia = {
				titulo: '',
				descripcion: ''
			};

			$scope.submit = function() {
				//hacer logica de validacion aqui
				$scope.onSubmit({dataForm: $scope.nuevaIncidencia});
			}

		},

		template: `
		<form ng-submit="submit()">
		  <div class="form-group">
		    <label>Titulo de la incidencia:</label>
		    <input type="text" class="form-control" model="nuevaIncidencia.titulo">
		  </div>
		  <div class="form-group">
		    <label>Descripcion de la incidencia:</label>
		    <textarea class="form-control" rows="6" model="nuevaIncidencia.descripcion">
		    	
		    </textarea>
		  </div>
		 
		  
		  <button type="submit" class="btn btn-default">Reportar</button>
		</form>
		`
	}
}

module.exports = {
	name: 'createInicidenciaForm',
	func: createInicidenciaForm
}