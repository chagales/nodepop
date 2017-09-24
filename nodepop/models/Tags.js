"use strict";

const mongoose = require('mongoose');

//Definimos Schema
const tagsSchema = mongoose.Schema({
  nombre: String,
},{
  collection:'tags'
});

// Añadimos método estático
tagsSchema.statics.lista = function( filter, skip, limit, callback) {
  const query = Tags.find(filter);
  query.skip(skip);
  query.limit(limit);

  return query.exec(callback); // ejecutamos la consulta
};


// crear el modelo
const Tags = mongoose.model('Tags', tagsSchema);

// No es necesario exportar el modelo
// ya que mongoose ya lo conoce
module.exports = Tags;
