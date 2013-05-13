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
			//options: { livereload: true },
			files: [
				'vendor/**/*',
				'app/styles/**/*.scss',
				'app/templates/**/*.jade',
				'app/*.js',
				'app/modules/**/*.js',
				'data/**/*',
				'src/fontcustom/*'
			],
			tasks: ['sass', 'jade', 'fontcustom']
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
					'app/templates/templates.js': ['app/templates/**/*.jade']
				}
			}
		},

		// Font Custom
		// Copy icon fonts
		copy: {
			main: {
				files: [
					{src: ['source/fontcustom/*.woff'], dest: 'app/styles/fonts/icons.woff'},
					{src: ['source/fontcustom/*.eot'],  dest: 'app/styles/fonts/icons.eot'},
					{src: ['source/fontcustom/*.svg'],  dest: 'app/styles/fonts/icons.svg'},
					{src: ['source/fontcustom/*.ttf'],  dest: 'app/styles/fonts/icons.ttf'}
				]
			}
		},
		replace: {
			main: {
				src: ['source/fontcustom/fontcustom.css'],
				dest: ['app/styles/exts/_icons.scss'],
				replacements: [{
					from: /fontcustom-[^.]+/g,
					to: 'icons'
				}, {
					from: 'fontcustom',
					to: 'icons'
				}]
			}
		}

	});

	// Define grunt tasks
	// =======================================
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('fontcustom', ['copy', 'replace']);

	// Load grunt packages
	// =======================================
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-text-replace');

};