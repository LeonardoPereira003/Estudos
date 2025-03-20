module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Lê o arquivo package.json para obter informações do projeto
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do LESS para compilar arquivos .less em CSS
        less: {
            development: { // Configuração para ambiente de desenvolvimento (sem compressão)
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' // Converte main.less para main.css
                }
            },
            production: { // Configuração para produção (com compressão)
                options: {
                    compress: true, // Ativa compressão do CSS
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/*.less' // Converte todos os arquivos LESS e os compacta
                }
            }
        },

        // Configuração para minificação de JavaScript
        uglify: {
            dist: { // Configuração para produção
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js'] // Minifica main.js e gera main.min.js
                }
            }
        },

        // Configuração para observar mudanças em arquivos e executar tarefas automaticamente
        watch: {
            less: { // Observa mudanças nos arquivos LESS e recompila automaticamente
                files: ['src/styles/**/*.less'], // Observa todos os arquivos .less dentro da pasta src/styles/
                tasks: ['less:development'], // Recompila o LESS quando houver mudanças
            },
            html: { // Observa mudanças no arquivo HTML e substitui os caminhos CSS/JS
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

        // Configuração para substituir caminhos no HTML para desenvolvimento e produção
        replace: {
            dev: { // Configuração para ambiente de desenvolvimento
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css' // Usa CSS não minificado no dev
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js' // Usa o JS original no dev
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'], // Arquivo de entrada
                        dest: 'dev/' // Arquivo de saída na pasta dev/
                    }
                ]
            },
            dist: { // Configuração para ambiente de produção
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css' // Usa CSS minificado na produção
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js' // Usa JS minificado na produção
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'], // Arquivo de entrada
                        dest: 'dist/' // Arquivo de saída na pasta dist/
                    }
                ]
            }
        },

        // Configuração para minificação de arquivos HTML na produção
        htmlmin: {
            dist: {
                options: {
                    removeComments: true, // Remove comentários do HTML
                    collapseWhitespace: true // Remove espaços desnecessários
                },
                files: {
                    'prebuild/index.html': 'src/index.html' // Minifica index.html e gera prebuild/index.html
                }
            }
        },

        // Configuração para limpar arquivos desnecessários na build
        clean: ['prebuild'] // Remove a pasta prebuild após a minificação do HTML
    });

    // Carregando os plugins necessários do Grunt
    grunt.loadNpmTasks('grunt-contrib-less'); // Plugin para compilar LESS
    grunt.loadNpmTasks('grunt-contrib-uglify'); // Plugin para minificação de JavaScript
    grunt.loadNpmTasks('grunt-contrib-watch'); // Plugin para observar mudanças em arquivos
    grunt.loadNpmTasks('grunt-replace'); // Plugin para substituir caminhos no HTML
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Plugin para minificação de HTML
    grunt.loadNpmTasks('grunt-contrib-clean'); // Plugin para limpeza de arquivos

    // Definição das tarefas do Grunt
    grunt.registerTask('default', ['watch']); // Define a task padrão como 'watch' (modo automático)
    grunt.registerTask('build', ['less:production', 'uglify:dist', 'htmlmin:dist', 'replace:dist', 'clean']); // Define a task 'build' para produção
};
