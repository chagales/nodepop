"use strict";

const express = require('express');
const router = express.Router();

// Le pedimos a mongoose que nos de el modelo de Anuncio
// const mongoose = require('mongoose');
// const Anuncio = mongoose.model('Anuncio');

const Anuncio = require('../../models/Anuncio');

const i18n = new (require('i18n-2')) ({
  locales: ['en', 'es']
});

// GET /
router.get('/', (req, res, next) => {

  const articulo = req.query.articulo;
  const venta = req.query.venta;
  const precio = req.query.precio;
  const foto = req.query.foto;
  const usuario = req.query.usuario;
  const tags = req.query.tags;
  const lang = req.query.lang;
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);

  console.log(tags);

  const filter = {};

  if(lang){
    setLocale(lang);
  }

  if (articulo) {
    filter.articulo = articulo;
  }

  if (venta) {
    filter.venta= venta;
  }
  if(tags) {
    filter.tags = tags;
  }
  if(precio){
    precio=precio.split("-");
    const precio1= precio[0];
    const precio2= precio[1];
    if(precio1 && precio2)
      filter.precio={ '$gte': precio1, '$lte':precio2};
    else if(precio1)
      filter.precio={'$gte':precio1};
    else if(precio2)
      filter.precio={'$lte':precio2};
  }

  // recuperar una lista de Anuncios
  Anuncio.lista(filter, skip, limit).then( lista => {
    console.log('lista devolver');
    console.log(lista);
    res.json({ success: true, rows: lista });
  }).catch( err => {
    return res.json({ success: false, error: i18n.__(err.message) });
  });
});

// GET /:id
// Recupera un solo documento
router.get('/:id', (req, res, next) => {
  const _id = req.params.id;
  Anuncio.findOne({ _id: _id }, (err, Anuncio) => {
    if (err) {
      return res.json({ success: false, error: i18n.__(err.message) });
    }
    res.json({ success: true, row: Anuncio});
  })
});

// POST /
// Crear un Anuncio
router.post('/', (req, res, next) => {
  console.log(req.body);

  // creamos un nuevo Anuncio
  const anuncio = new Anuncio(req.body);

  // lo guardamos en la base de datos
  anuncio.save((err, AnuncioGuardado) => {
    if (err) {
      return res.json({ success: false, error: i18n.__(err.message) });
    }
    res.json({ success: true, result: AnuncioGuardado});
    console.log("Anuncio guardado");
  });
});

// PUT /
// Actualizar un Anuncio
/*router.put('/:clavedelAnuncio', (req, res, next) => {
  const _id = req.params.clavedelAnuncio;
  // actualizo con {new: true} para que retorne el AnuncioActualizado y no el anterior
  Anuncio.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, AnuncioActualizado) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true, result: AnuncioActualizado});
  });
});

router.delete('/:id', (req, res, next) => {
  const _id = req.params.id;
  Anuncio.remove({ _id: _id }, (err) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true });
  })
});
*/
module.exports = router;
