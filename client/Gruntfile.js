module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    useminPrepare: {
      html: 'app/index.html'
    },
    usemin: {
      html: 'dist/index.html'
    },
    wiredep: {
      target: {
        src: [
          'app/index.html'
        ],
        dependencies: true,
        devDependencies: false
      }
    },
    bower: {
      install: {
        options: {
          targetDir: 'app/bower_components'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'bower:install',
    'wiredep',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'usemin'
  ]);

};
