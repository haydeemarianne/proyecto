function sidebar() {
	return {
		controller: function() {

		},

		template: `
		<div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <a href="/proyecto/#!/crear-incidencia">Crear Incidencia 
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="">
              <a href="/proyecto/#!/mostrar-incidencias-reporter/:reporterId'">Listar Incidencia 
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
         
        </div>
       
		`
	}
}

module.exports = {
	name: 'sidebar',
	func: sidebar
}