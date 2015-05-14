module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            plugin: {
                options: {
                    basePath: 'src',
                    comments: true,
                    sourceMap: false
                },
                src: ['src/**/*.ts'],
                out: 'bin/plugin.js'
            }
        },
        'string-replace': {
            version: {
                files: {
                    'bin/plugin.js': ['bin/plugin.js']
                },
                options: {
                    replacements: [{
                        pattern: /{{ VERSION }}/g,
                        replacement: '<%= pkg.version %>'
                    }]
                }
            }
        },
        watch: {
            source: {
                files: ['src/**/*.ts'],
                tasks: ['ts:plugin', 'string-replace:version']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', ['ts:plugin', 'string-replace:version']);
};