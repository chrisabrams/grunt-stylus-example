"use strict";

var grunt = require('grunt');

module.exports = function(grunt) {

  // Auto-load grunt tasks so we don't have to manually load them
  require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: ['public/']
    },
    stylus: {
      dist: {
        options: {
          compress: false
        },
        dest: 'public/css/app.css',
        src: ['styles/app.styl']
      }
    }
  });

  grunt.registerTask('styles', ['stylus']);

  grunt.registerTask('b', ['clean', 'styles']);

  grunt.registerTask('default', 'b');

  return;

};
