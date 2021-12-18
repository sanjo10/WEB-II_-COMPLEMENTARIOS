const mongoose = require('mongoose');

const RecordatoriosSchema = new mongoose.Schema(
        {   
            tituloRecordatorio: {type:String, required: true},
            descripcionRecordatorio: {type:String, required: true}
        }, 
        {
            timestamps: {createdAt:true, updatedAt:true}
        }
)

module.exports=mongoose.model("Recordatorio", RecordatoriosSchema)


