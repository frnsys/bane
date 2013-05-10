module.exports = function(grunt) {

	// Configuration
	// =======================================
	grunt.initConfig({
		// Server
		connect: {
			server: {
				options: {
					port: 8989
				}
			}
		},

		// Watch
		watch: {
			options: { livereload: true },
			files: ['vendor/**/*', 'dev/**/*', 'data/**/*'],
			tasks: ['sass', 'jade']
		},

		// Compile SASS/SCSS
		// Since all other stylesheets are @import-ed in index.scss,
		// that's the only one we need to compile.
		sass: {
			app: {
				files: {
					'app/styles/index.css': 'app/styles/index.scss'	
				}
			}
		},

		// Compile Jade templates
		jade: {
			compile: {
				options: {
					pretty: true,
					client: true,
					amd: true,
					compileDebug: false
				},
				files: {
					'app/templates.js': ['app/templates/**/*.jade']
				}
			}
		}

	});

	// Define grunt tasks
	// =======================================
	grunt.registerTask('default', ['connect', 'watch']);

	// Load grunt packages
	// =======================================
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');

};