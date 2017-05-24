function incidenciaItem() {

	return {
		scope: {
			titulo: '@',
			incidenciaId: '@',
			fechaLabel: '@',
			fechaContenido: '@',
			hideRemoveButton: '=',
			hideShowButton: '=',
			onShow: '&',
			onRemove: '&',
		},
		controller: function($scope) {
			$scope.remove = remove;
			$scope.show = show;

			function remove() {
				$scope.onRemove({incidenciaInput: $scope.incidenciaId});
			}

			function show() {
				$scope.onShow({incidenciaInput: $scope.incidenciaId});
			}
		},
		template: `
		<div class="list-group">
		  <span class="list-group-item">
		    <h4 class="list-group-item-heading" style="text-decoration: underline;">
		    	<span>{{titulo}}</span>
		    	<span class="pull-right">
		    		<button
		    			ng-hide="hideRemoveButton"
			    		ng-click="show()"
			    		class="btn btn-primary glyphicon glyphicon-eye-open">
			    	</button>
		    		<button
		    			ng-hide="hideShowButton"
			    		ng-click="remove()"
			    		class="btn btn-danger glyphicon glyphicon-trash">
			    	</button>
		    	</span>
		    </h4>
		    <p class="list-group-item-text">
		    	<strong>
		    		{{fechaLabel}}
		    	</strong>
	    	 	<span>
		    		{{fechaContenido}}
	    	 	</span>
    	 	</p>
		  </span>
		</div>
		`
	}

}

module.exports = {
	name: 'incidenciaItem',
	func: incidenciaItem
}