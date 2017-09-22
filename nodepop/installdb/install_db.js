"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;
const Anuncio = require('../models/Anuncio');
const datos = require('./datosIniciales.json');

mongoose.connect('mongodb://localhost/nodepop');

conn.once('open', async () =>{
  console.log('Conectado a MongoDB');
  const res = await Anuncio.deleteMany({});
  console.log('Eliminados', res.result.n, 'anuncios');
  const insertados = await Anuncio.insertMany(datos.anuncios);
  console.log(`Insertados ${insertados.length} anuncios`);
});
