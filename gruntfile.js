module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development:{
                files:{
                    'main.css': 'main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist:{
                options:{
                    style:'compressed'
                },
                files:{
                    'main2.css': 'main.scss'
                }
            }
        },
        uglify:{
            target:{files:{
               'script.min.js': 'script.js' 
            }}
        }
    })

    grunt.registerTask('gruntStart', function(){
        const done = this.async();
        setTimeout(()=>{
            console.log('grunt iniciando...')
            done();
        }, 2000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less','sass', 'uglify'])
}