module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-parallel');

  grunt.initConfig({
    parallel: {
      server: {
        options: {
          grunt: true
        },
        tasks: ['connect:dev', 'watch:dev']
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          keepalive: true,
          base: 'app',
          livereload: 35729
        }
      }
    },
    watch: {
      dev: {
        files: ['app/**/*.html', 'app/**/*.js', 'app/**/*.css', '!app/bower_components/**/*'],
        options: {
          livereload: true
        }
      }
    },
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

  grunt.registerTask('server', [
    'parallel:server'
  ]);
};
