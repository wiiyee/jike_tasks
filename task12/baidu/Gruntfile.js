// AdminLTE Gruntfile
module.exports = function (grunt) {

    var config = {
        images: 'statics/images',
        fonts: 'statics/fonts',
        skin: 'statics/skin',
        css: 'statics/css',
        js: 'statics/js',
        dist_images: 'dist/images',
        dist_fonts: 'dist/fonts',
        dist_skin: 'dist/skin',
        dist_css: 'dist/css',
        dist_js: 'dist/js'
    };

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            build: {
                files: ['<%= config.js%>/*.js', '<%= config.css%>/*.css'],
                tasks: ['uglify', 'cssmin']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    '<%= config.dist_js%>/all.min.js': '<%= config.js%>/baidu.js'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                files: {
                    '<%= config.dist_css%>/all.min.css': '<%= config.css%>/*.css'
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.skin %>/',
                        src: ['**'],
                        dest: '<%= config.dist_skin %>/'
                    }, {
                        expand: true,
                        cwd: '<%= config.fonts %>/',
                        src: ['**'],
                        dest: '<%= config.dist_fonts %>/'
                    }, {
                        expand: true,
                        cwd: '<%= config.images %>/',
                        src: ['**'],
                        dest: '<%= config.dist_images %>/'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.css %>/',
                        src: ['**'],
                        dest: '<%= config.dist_css %>/'
                    }, {
                        expand: true,
                        cwd: '<%= config.js %>',
                        src: ['**'],
                        dest: '<%= config.dist_js%>/'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['watch', 'uglify', 'cssmin', 'copy']);
}

