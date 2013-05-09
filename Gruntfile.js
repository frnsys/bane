module.exports = function(grunt) {

	// Configuration
	grunt.initConfig({
		watch: {
			files: ['vendor/**/*', 'app/**/*', 'data/**/*'],
			tasks: ''
		}
	});

	// Define grunt tasks
	grunt.registerTask('default', ['watch']);

	// Load grunt packages
	grunt.loadNpmTasks('grunt-contrib-watch');

};