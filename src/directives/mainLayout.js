function mainLayout() {

	return {
		scope: {
			title: '@'
		},
		controller: function($scope) {

		},
		transclude: true,
		template: `
		<div>
			<navbar></navbar>
		    <div class="container-fluid">
		      <div class="row">
		        <sidebar></sidebar>
		       	<content-page title="{{title}}">
		       		<ng-transclude></ng-transclude>
		       	</content-page>
		      </div>
		    </div>
	    </div>
		`
	}


}

module.exports = {
	name: 'mainLayout',
	func: mainLayout
}