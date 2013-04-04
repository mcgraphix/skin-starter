/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        gruntfile: {
            src: 'Gruntfile.js'
        },
        stylus: {
            compile: {
                options: {
                    paths: ['src/mixins'],
                    compress: false
                },
                files: {
                    'release/EXAMPLE.css': ['src/copyright.styl', 'src/EXAMPLE.styl']
                }
            },
            minify: {
                options: {
                    paths: ['src/mixins'],
                    compress: true
                },
                files: {
                    'release/EXAMPLE.min.css': ['src/copyright.styl', 'src/EXAMPLE.styl']
                }
            }
        },
        jade: {
            compile: {
                expand: true,
                cwd: 'test/perf',
                src: ['*.jade'],
                dest: 'test/perf/',
                ext: '.html'
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        },
        watch: {
            files: 'src/*.styl',
            tasks: ['default']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Default task.
    grunt.registerTask('default', ['stylus', 'jade', 'nodeunit']);

};
