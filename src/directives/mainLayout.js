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
		          <div class="logo" style="position: absolute; right: 5%; padding: 10px;">
						<img src="./dist/images/logos.png" alt="logo ind" height="50" width="100">
					</div>
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