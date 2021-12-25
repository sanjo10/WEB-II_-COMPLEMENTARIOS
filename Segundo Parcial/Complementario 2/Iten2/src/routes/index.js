const { Router } = require('express');

const router = Router();

const {NombreLinkClase} = require('../models/index')

let data='Moodle  https://aulavirtualmoodle.uleam.edu.ec/';

let nuevaData ='Link actualizado www.youtube.com'

/*Crear link de clases*/
router.post('/create', async (req, res)=>{
      
         await NombreLinkClase.create({
            nombre_link_clase: data
           
          
        }) 
        console.log('Link Clase guardados desde ruta');

        res.send(`<h1><strong>Link de Clase guardado en la base de datos </h1></strong>  `);
       
});


/*Mostrar los links con su id y datos*/
router.get('/links',(req, res )=>{ 
       NombreLinkClase.find({},{"_id":1, "nombre_link_clase":1},
       (err, datos)=>{
       res.send({
                datos
               })
       })     
});


/*Ruta para actualizar links */
router.put(`/actualizar`, async(req, res)=>{
     
        await NombreLinkClase.updateOne({ "_id":("61903865d313a275f70faf9f")}
        ,
        {
         nombre_link_clase:nuevaData
        }
        )
        
        console.log('Actualizado desde la ruta')
       
        res.send('Actualizado el registro');

})

/*Ruta para eliminar links */
router.delete(`/delete`, async(req, res)=>{
     
        await NombreLinkClase.deleteOne({ "_id":"61903865d313a275f70faf9f", })
        
        console.log('Registro eliminado desde router')
        res.send('Registro eliminado');

})

module.exports= router;