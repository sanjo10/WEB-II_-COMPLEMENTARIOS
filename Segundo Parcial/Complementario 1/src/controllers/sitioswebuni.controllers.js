/*Importamos el objeto contenidoUni*/
const {datosUni} = require('../views/linkUni')
/*Declaramos una variable vacía para almacenar el menú de los sitios web*/
let sitiouni=''
/*Usamos un ciclo for para recorrer los elementos del objeto LINKS*/
for(sitios of datosUni.links){
  sitiouni+=`\n *Nombre sitio web:* ${sitios.nombreSitio} ➡ *🌐Enlace:* , ${sitios.enlace}`
} 
 /*exportamos la variable*/
module.exports={
  sitiouni
}



