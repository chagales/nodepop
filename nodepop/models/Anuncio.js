"use strict";

const mongoose = require('mongoose');

//Definimos Schema
const anuncioSchema = mongoose.Schema({
  articulo: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  usuario: String,
  tags: [String]
},{
  collection:'anuncios'
});

// Añadimos método estático
anuncioSchema.statics.lista = function( filter, skip, limit, callback) {
  const query = Anuncio.find(filter);
  query.skip(skip);
  query.limit(limit);

  return query.exec(callback); // ejecutamos la consulta
};


// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// No es necesario exportar el modelo
// ya que mongoose ya lo conoce
module.exports = Anuncio;
