var elixir = require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//esto deberia ser mejorado con underscore
elixir.config.assetsPath = '';
elixir.config.css.folder = '';
elixir.config.css.less.folder = '';
elixir.config.js.folder = '';

elixir(function(mix) {

	mix

		.browserify('app.js', 'dist/js/app.js', 'src');
		
});