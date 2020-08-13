const argv = require('./config/yargs').argv;
const colors = require('colors');

const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listTable(argv.base, argv.limit)
            .catch(err => console.log(err));
        break;
    case 'crear':
        createFile(argv.base, argv.limit)
            .then(archivo => console.log('Archivo creado:', `${archivo}`.red))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}