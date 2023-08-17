const { Schema, model } = require ("mongoose")

const personaSchema = Schema({

    nombre:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    fechaNacimiento:{
        tipe: Number,
        required: [true, 'la fecha de nacimiento es obligatoria']
    },
    dirección:{
        tipe: String,
        required:[true, 'la dirección es obligatoria']
    },
    telefono:{
        type: Number,
        required: [true, 'el numero es obligatorio']
    },
    Carrera:{
        type: String,
        required: [true, 'la carrera es obligatorio']
    },
    Genero:{
        type: String,
        required: [true, 'el genero es obligatorio']
    },
    generoPoesia:{
        type: String,
        required: [true, 'este campo es obligatorio']
    }

    
})

module.exports = model('persona', personaSchema)