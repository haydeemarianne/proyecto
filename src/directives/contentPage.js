function contentPage() {
	return {
		transclude: true,
		scope: {
			title: '@'
		},
		controller: function($scope) {

		},
		template: `
	 	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        	<h1 class="page-header">{{title}}</h1>
        	<ng-transclude></ng-transclude>
        </div>
		`
	}
}

module.exports = {
	name: 'contentPage',
	func: contentPage
}