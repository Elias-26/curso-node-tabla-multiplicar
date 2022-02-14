//const { argv0 } = require('process');
//const { options, array, argv } = require('yargs');
//const { boolean } = require('yargs');
const {crearArchivo}= require ('./helpers/multiplicar');
//para hacer que se exporte el archivo colocamos este comando en la cual en los parentesis colocamos
//el nombre de la carpeta y el archivo que queremos exportar sin olvidar el punto y coma al final. 
const colors = require('colors'); //siempre que querramos utilizar un color, debes de copiar este comando y colocarlo
//en el archivo en donde queremos usar los colores.
const argv = require('./config/yargs');


//imprimir la tabla de multiplicar del nuemro 5 


console.clear();

crearArchivo (argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log (nombreArchivo.bold.cyan,'creado'))
    .catch( err => console.log(err));


