module.exports = function(grunt) {

	// Configuration
	grunt.initConfig({

		// Watch
		watch: {
			files: ['vendor/**/*', 'app/**/*', 'data/**/*'],
			tasks: 'coffee, sass'
		},

		// Compile CoffeeScript
		// We only need to compile the
		// main script, since, in dev,
		// the other coffeescripts will be
		// compiled on the fly.
		coffee: {
			compile: {
				'app/main.js': 'app/main.coffee'
			}
		}


	});

	// Define grunt tasks
	grunt.registerTask('default', ['watch']);

	// Load grunt packages
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');

};