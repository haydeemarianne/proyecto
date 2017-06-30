function initial($stateProvider) {

	$stateProvider.state('init', {
		url: '/init',
		controller: function($scope) {
			$scope.onSubmitLoginForm = function(formData) {
				console.log(formData);
			}
		},
		template: `
		<style>
			.container {
				margin-top: 50px;

			}
			.logo 
			{
			  margin-left: 20%;
              margin-bottom: 40px;
			}

		</style>

		<div class="container">
			<div class="row">
				<div class="col-xs-6 col-xs-offset-3">
				<div class="logo">
				<img src="./dist/images/logos.png" alt="Smiley face" height="150" width="300">
				</div>
					<div class="panel panel-default">
					  	<div class="panel-body">
					    	<login-form on-submit="onSubmitLoginForm(formData)"></login-form>
					  	</div>
					</div>
				</div>
			</div>
		</div>
		`
	});


}

module.exports = initial;