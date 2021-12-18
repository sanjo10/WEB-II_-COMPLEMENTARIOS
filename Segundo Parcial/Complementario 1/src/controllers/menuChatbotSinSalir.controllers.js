
/*Importamos el objeto MenuChatBot*/
const {MenuNoSalida} = require('../views/menu')
/*Declaramos una variable vacía para almacenar el menú de opciones que acceda a cliente*/
let menusinexit=''

for( sinexit of MenuNoSalida.menuprincipal){
    menusinexit+=`\n *${sinexit.opcionId}*.${sinexit.actividad}`
} 



 /*exportamos la variable*/
module.exports={
  menusinexit
}
