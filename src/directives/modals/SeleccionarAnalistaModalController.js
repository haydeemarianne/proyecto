function SeleccionarAnalistaModalController($scope, $uibModalInstance, analistas) {

	$scope.analistas = analistas;

	$scope.ok = function (analista) {
    	$uibModalInstance.close({analista: analista});
  	};

  	$scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
  	};


}

module.exports = SeleccionarAnalistaModalController;