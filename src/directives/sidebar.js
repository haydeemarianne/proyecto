function sidebar() {
	return {
		controller: function() {

		},

		template: `
		<div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <a href="#">Crear Incidencia 
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