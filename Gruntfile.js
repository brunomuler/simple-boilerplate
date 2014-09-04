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
		},
		connect: {
		 	server: {
		 		options : {
		 			open: true,
		 			hostname: 'localhost',
					//keepalive: true,
					port: 3000
		 		}
		 	}
		 }
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');

	// Default task(s).
	grunt.registerTask('default', ['connect', 'watch']);

}