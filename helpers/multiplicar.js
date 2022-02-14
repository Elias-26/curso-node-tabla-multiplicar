
const fs = require('fs'); 
const colors = require('colors'); 

const crearArchivo = async(base = 5, listar = false, hasta = 10 ) => {


    try { 


 let salida = '';
 let consola = ''; 


for(let i =1; i <= hasta; i++ ){
    salida  += `${ base } x  ${ i } =  ${ base * i }\n`;//se agrega un salto de linea con el \n
    consola += `${ base } ${ 'x'.green }  ${ i } ${'='.yellow } ${ base * i }\n`;
}

if( listar ){
    console.log('========================'.yellow)
    console.log('  tabla del:'.cyan, base )
    console.log('========================'.yellow)

    console.log (salida); 
    
}

/* para hacer que los resultados se vean reflejados en el archivo y no 
fuera el, colocamos en la parte "writeFilesSync" el nombre del documento
colocandolo dentro de las comillas inversas de como ./salida/  */

fs.writeFileSync( `./salida/tabla-${ base }.txt`,salida);

    return `tabla-${ base }.txt`;

        
    } catch (error) {
        throw error;
    }
  

}

module.exports = {

    crearArchivo
        
    
}

