/*Importamos el objeto MenuChatBot*/
const {Menu} = require('../views/menu')
/*Declaramos una variable vacía para almacenar el menú de opciones que acceda a cliente*/
let menup=''
/*Usamos un ciclo for para recorrer los elementos del objeto menuprincipal*/
for( menuprincipal of Menu.menuprincipal){
  menup+=`\n *${menuprincipal.opcionId}*.${menuprincipal.actividad}`
} 



 /*exportamos la variable*/
module.exports={
  menup
}



