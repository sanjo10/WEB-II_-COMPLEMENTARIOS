const mongoose = require('mongoose');

const NombreLinkClasesSchema = new mongoose.Schema(
        {   
            nombre_link_clase: {type:String},
        }, 
        {
            timestamps: {createdAt:true, updatedAt:true}
        }
)

module.exports=mongoose.model("NombreLinkClase", NombreLinkClasesSchema)


