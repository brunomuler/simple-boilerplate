module.exports = function(grunt) {
	var reloadPort = 35729;

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			html: {
				files: '*.html',
				options: {
					livereload: reloadPort
				}
			},

			jshint: {
				files: 'js/*.js',
				tasks: 'jshint',
				options: {
					livereload: reloadPort
				}
			},
			sass: {
				files: 'scss/**/*.scss',
				tasks: 'sass',
				options: {
					livereload: reloadPort
				}
			}
		},

		jshint: {
			src: 'js/*.js'
		},

		sass: {
			options: {
				 sourceMap: true,
                 includePaths: require('node-bourbon').includePaths
			},
			dev:{
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sass');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

}