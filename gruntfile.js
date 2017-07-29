module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'style.css': 'style.sass'
				}
			}
		},
		jshint: {
			all: ['js/*.js']
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['sass'], ['jshint']);
};