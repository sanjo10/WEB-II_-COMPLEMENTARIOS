/*Importando mensajes*/
const {smscliente} = require('./src/views/mensajes');
/*Importamos los controladores*/
const {MenuSitiosUleam, MenuChatBot,MenuSinSalir} = require('./src/controllers/index') 
let {listclases}= require('./src/controllers/enlacesclases.controllers')
/*Importamos los scripts de views*/
const {Menu} = require('./src/views/menu') 

/* Librería para generar QRcode*/ 
const qrcode = require('qrcode-terminal');
/* Librería para conectar a tráves de wsp*/
const { Client } = require('whatsapp-web.js');

/*Importando los modelos de mongoDB*/

const {NombreLinkClase} = require('./src/models')


const express = require('express');

const app =express();

app.use(express.json());
// Conexión de MongoDB
require('./src/database/database')
/*Función asincrona para esperar los datos de la Base en mongo creada*/
async function dataBD() {
        listclases = await require('./src/controllers/enlacesclases.controllers').ListEnlacesClases() ;         
        return listclases
}
dataBD();

/*Instacionamos el cliente, para usar la API de Whatsapp*/
const client = new Client();
/*Función flecha para generar el código de tamaño pequeño*/ 
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
/*Función flecha donde indicamos que la conexión está establecida después de generar código qr*/

client.on('ready', () => {
    console.log('Conexión establecida!');
});
/*Función flecha para mostrar todos mensajes ya sea de estados y clientes*/
client.on('message', message => {
	console.log(message.body);
});
/*Declarada la variable para hacer condiciones*/
let count_sms= 0;


client.on('message', message => {
    /*Que cualquier mensaje string dell cliente, sea transformado
    a minúscula y permita hacer las condiciones*/ 

    let mensajecliente  = message.body.toLowerCase(); 
	if(count_sms < 1  ){
        /*Primer mensaje del estudiante*/
		client.sendMessage(message.from, `${smscliente. mensajeBienvenida} \n ${MenuChatBot.menup}`);
        count_sms =count_sms +1;
	}   else if(count_sms == 1)
        {      
        switch(mensajecliente) {
                      
        case Menu.menuprincipal[0].opcionId:
                client.sendMessage(message.from,`*🌐💻ENLACES WEB DE LA ULEAM*${MenuSitiosUleam.sitiouni} \n 🔻ENVIE🔻👉 *V* PARA VOLVER AL MENÚ PRINCIPAL 📑`)
                break;
        case 'v':
                client.sendMessage(message.from, ` *👀MENÚ PRINCIPAL📑👇* ${MenuChatBot.menup}`)
                break;
        case Menu.menuprincipal[1].opcionId:
                
                client.sendMessage(message.from,`*USTED ESTÁ EN GUARDAR A TUS CLASES💾📚* \n ${smscliente.instruccionGuardarClases} `); 
                
                count_sms=2;
                break;
        case Menu.menuprincipal[2].opcionId:   
                 
                client.sendMessage(message.from, `*📋LISTA DE TUS CLASES* \n ${listclases} \n  \n \n *👀MENÚ PRINCIPAL📑👇* ${MenuChatBot.menup} 
                `);
                break;
        case Menu.menuprincipal[3].opcionId:
                client.sendMessage(message.from, `${smscliente.despedidaPrincipal} ` );
                count_sms=0;
                break; 
        default:
                client.sendMessage(message.from,`${smscliente.mensajeErrorPrincipal}. \n 👀MENÚ PRINCIPAL📑👇 ${MenuChatBot.menup}`)         
        }   
    } else if(count_sms==2) {
              
        var data = new NombreLinkClase({
                nombre_link_clase:message.body
                 })
            
        NombreLinkClase.create(data,()=>{
                 console.log('Clase y Link Universitario guardados en BD')
        });
     
        client.sendMessage(message.from,`${smscliente.confirmadoDeGuardadoClase}`);
        client.sendMessage(message.from,`🔻ENVIE🔻👉 *V* O CUALQUIER MENSAJE PARA VOLVER AL MENÚ PRINCIPAL 📑`);
        count_sms=3;
    } else if(count_sms==3) {
        dataBD();  
        client.sendMessage(message.from,`👀MENÚ PRINCIPAL📑👇 ${MenuSinSalir.menusinexit}`);    
        count_sms=1;
    }
});

/*Método donde iniciar la autenticación de la aplicación*/
client.initialize();
