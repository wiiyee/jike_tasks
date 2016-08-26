module.exports = function (grunt) {
    var config = {
        images: 'static/images',
        fonts: 'static/fonts',
        less: 'static/less',
        css: 'static/css',
        js: 'static/js',
        dist_css: 'dist/css',
        dist_js: 'dist/js',
        dist_img: 'dist/images',
        dist_fonts: 'dist/fonts'
    };
    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.less%>/',
                    src: '*.less',
                    dest: '<%= config.css%>/',
                    ext: '.css'
                }]
            }
        },
        concat: {
            css: {
                files: {
                    '<%=config.css%>/all.css': ['<%= config.css%>/global.css', '<%= config.css%>/index.css']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                files: {
                    '<%= config.dist_css%>/all.min.css': '<%= config.css%>/all.css'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    '<%= config.dist_js%>/all.min.js': '<%= config.js%>/*'
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.images %>/',
                    src: ['**'],
                    dest: '<%= config.dist_img %>/'
                },
                    {
                        expand: true,
                        cwd: '<%= config.fonts %>/',
                        src: ['**'],
                        dest: '<%= config.dist_fonts %>/'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['less', 'concat', 'cssmin', 'uglify', 'copy']);
};