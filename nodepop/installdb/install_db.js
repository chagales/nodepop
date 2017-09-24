"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;
const Anuncio = require('../models/Anuncio');
const Tags = require('../models/Tags');
const datos = require('./datosIniciales.json');
const tags =require('./tags.json');

mongoose.connect('mongodb://localhost/nodepop');

conn.once('open', async () =>{
  console.log('Conectado a MongoDB');
  const res = await Anuncio.deleteMany({});
  console.log('Eliminados', res.result.n, 'anuncios');
  const insertados = await Anuncio.insertMany(datos.anuncios);
  console.log(`Insertados ${insertados.length} anuncios`);
  //Mismo proceso para tags
  const restags = await Tags.deleteMany({});
  console.log('Eliminados', restags.result.n, 'tags');
  const insertadostags = await Tags.insertMany(tags.tags);
  console.log(`Insertados ${insertadostags.length} tags`);

});
