const {response, request } = require('express');

const persona= require('../model/personaModel');
const {Promise} = require ('mongoose');

const getpersona = async (req = request, res = response) => {

    const listapersona = await persona.find()


    res.json({
            msg:'get Api de forms',
            listapersona
    })
}

const postpersona = async (req= request, res = response) => {
    const {nombre, fechaNacimiento, dirección, telefono, ...body} = req.body;
    
    const formDB = new persona({nombre, ...body});

    await formDB.save();

    res.status(201).json({
        msg: 'Post api',
        formDB
    })
}

module.exports = {
    getpersona,
    postpersona
}