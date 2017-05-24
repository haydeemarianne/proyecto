function loginForm() {
	return {
		scope: {
			onSubmit: '&'
		},
		controller: function($scope) {
			
		},
		template: `
		<form novalidate ng-submit="onSubmit({formData: credencial})">

		  	<div class="form-group">
		    	<label>Email</label>
		    	<input 
		    		type="email" 
		    		ng-model="credencial.email"
		    		class="form-control" 
		    		placeholder="Correo Electronico"/>
		  	</div>

		  	<div class="form-group">
		  		<label>Contraseña</label>
			  	<input 
		    		type="password" 
		    		ng-model="credencial.password"
		    		class="form-control" 
		    		placeholder="Contraseña"/>
		  	</div>
		  
		  	<button type="submit" class="btn btn-default">Iniciar Session</button>

		</form>
		`
	}
}

module.exports = {
	name: 'loginForm',
	func: loginForm
}