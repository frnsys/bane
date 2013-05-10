module.exports = function(grunt) {

	// Configuration
	// =======================================
	grunt.initConfig({

		// Watch
		watch: {
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
		},

		// Clean out app/
		clean: ['app/']

	});

	// Define grunt tasks
	// =======================================
	grunt.registerTask('default', ['watch']);

	// Load grunt packages
	// =======================================
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');

};