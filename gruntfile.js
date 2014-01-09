module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				files: {
					'jquery.cssDetect.js': 'src/js/*.js'
				}
			}
		},

		jshint: {
      options: {
        expr: true
      },

      all: ['gruntfile.js', 'src/js/*.js', 'test/spec/*.js']
    },

		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'uglify']);
};