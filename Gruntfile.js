'use strict';

module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			js: [
				"app/js/app.min.js",
				"index_prod.html"
			]
		},

		jshint: {
			files: [
				'app/js/**/*.js'
			]
		},

		uglify: {
			development: {
				files: {
					'app/js/app.min.js': [
						'app/js/**/*.js'
					]
				}
			}
		},

		processhtml: {
			dist: {
				files: {
					'index_prod.html': ['index.html']
				}
			}
		},

		inline_angular_templates: {
			dist: {
				options: {
					// base: '/',           // (Optional) ID of the <script> tag will be relative to this folder. Default is project dir.
					// prefix: '/',         // (Optional) Prefix path to the ID. Default is empty string.
					// selector: 'body',    // (Optional) CSS selector of the element to use to insert the templates. Default is `body`.
					// method: 'prepend',   // (Optional) DOM insert method. Default is `prepend`.
					unescape: {             // (Optional) List of escaped characters to unescape
						'&lt;': '<',
						'&gt;': '>',
						'&apos;': '\'',
						'&amp;': '&'
					}
				},
				files: {
					'index_prod.html': [
						'app/views/**/*.html'
					]
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-inline-angular-templates');

	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'processhtml','inline_angular_templates']);
};