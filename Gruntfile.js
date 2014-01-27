/* License: MIT.
 * Copyright (C) 2014, Rasmus Schlünsen
 */

'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'dist/angular-gauge.min.js': 'src/angular-gauge.js'
				}
			}
		}
	});

	grunt.registerTask('build', [
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
