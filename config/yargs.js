const { describe } = require('yargs');
/* siempre que se quiera hacer un cambio en la tabla 
se puede hacer desde aqui */

// para poder crear una option, podemos copiar esta seccion del codigo de la linea 9 hasta la 13 
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    //al colocar el describe como lo dice el nombre agregaremos una descripcion de lo que hace la bandera 
                    // al mostrarnos el mensaje en la consola
                    // -b, --base     "Es la base de la tabla de multiplicar"
                    describe: 'Es la base de la tabla de multiplicar'
                })
                //al copiar esta linea del codigo, el primer cambio que haremos es cambiar la opcion de "b" a "l"
                // el segundo cambio sera el alias lo cambiamos a "listar" (o el nombre que querramos colocar)
                // le tercer cambio es en type colocamos "boolean"
                // colocamos el default: false si ya que no se ah colocado

                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Muestra la tabla en la consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'numero',
                    default: 10,
                    describe:'este es el numero hasta donde quiere que se multiplique'
                })
                .check( (argv, options) => {
                   if(isNaN( argv.base) ){
                       throw 'la base tiene que ser un numero'
                   }
                   return true;
                    // console.log('yargs', argv)
                })
                .argv;

//con este comando importaremos el archivo es decir lo preparamos para que sea llamado en cualquier lugar del documento
// en el que lo necesitemos.
                module.exports = argv;