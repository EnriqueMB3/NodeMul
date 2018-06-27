const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Guarda un archivo con la tabla de multiplicar ingresada', opts)
    .help()
    .argv;

module.exports = {
    argv
}