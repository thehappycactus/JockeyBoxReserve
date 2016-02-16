//require('load-grunt-tasks')(grunt);

module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					// Scripts
					{ expand: false, src: ['node_modules/angular/angular.min.js'], dest: 'scripts/lib/angular.min.js'},
					{ expand: false, src: ['node_modules/angular-resource/angular-resource.min.js'], dest: 'scripts/lib/moment.min.js'},
					{ expand: false, src: ['node_modules/moment/min/moment.min.js'], dest: 'scripts/lib/angular-resource.min.js'}
				]
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'styles/main.css': 'styles/main.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['sass', 'copy']);
}