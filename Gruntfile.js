module.exports = function(grunt) {

	// Configuration
	// =======================================
	grunt.initConfig({

		// Watch
		watch: {
			files: ['vendor/**/*', 'app/**/*', 'data/**/*'],
			tasks: ['coffee', 'sass', 'jade']
		},

		// Compile CoffeeScript
		// We only need to compile the main script, since, in dev,
		// the other coffeescripts will be compiled on the fly.
		coffee: {
			compile: {
				files: [{
					expand: true,
					src: '**/*.coffee',
					dest: 'dist/',
					cwd: 'app',
					ext: '.js'
				}]
			}
		},

		// Compile SASS/SCSS
		// Since all other stylesheets are @import-ed in index.scss,
		// that's the only one we need to compile.
		sass: {
			dist: {
				files: {
					'dist/styles/index.css': 'app/styles/index.scss'	
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
					'dist/templates.js': ['app/templates/**/*.jade']
				}
			}
		},

		// Clean out dist/
		clean: ['dist/']

	});

	// Define grunt tasks
	// =======================================
	grunt.registerTask('default', ['watch']);

	// Load grunt packages
	// =======================================
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');

};