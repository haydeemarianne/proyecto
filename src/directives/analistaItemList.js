function analistaItemList() {
	return {
		scope: {
			analista: '=',
			onSelect: '&'
		},
		controller: function($scope, $rootScope) {
			$scope.selectAnalista = selectAnalista;

			function selectAnalista() {
				$scope.onSelect({analista: $scope.analista});
			}
		},	

		template: `
		<li class="list-group-item" ng-click="selectAnalista()">
	        <div class="row">
	            <div class="col-xs-6">
	                <span>Nombre: </span>
	                <span>{{analista.informacionPersonal.nombre}}</span>
	            </div>
	            <div class="col-xs-6">
	                 <span>Apellido: </span>
	                <span>{{analista.informacionPersonal.apellido}}</span>
	            </div>
	        </div>
	        <div class="row">
	            <div class="col-xs-6">
	                <span>Cargo: </span>
	                <span>{{analista.cargo.name}}</span>
	            </div>
	            <div class="col-xs-6">
	                 <span>Departamento: </span>
	                <span>{{analista.departamento.name}}</span>
	            </div>
	        </div>
	        <div class="row">
	            <div class="col-xs-6">
	                <span>Indidecias en proceso:</span>
	                <span class="label label-primary">
	                    {{analista.incidenciasCount.enProceso}}
	                </span>
	            </div>
	        </div>
      </li>
		`
	}
}

module.exports = {
	name: 'analistaItemList',
	func: analistaItemList
}