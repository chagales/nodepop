var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');


const Anuncio = require('../models/Anuncio');

/* GET home page. */
router.get('/', function(req, res, next) {

  const articulo = req.query.articulo;
  const venta = req.query.venta;
  const precio = req.query.precio;
  const foto = req.query.foto;
  const usuario = req.query.usuario;
  const tag = req.query.tag;
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);

  console.log(tag);

  const filter = {};

  if (articulo) {
    filter.articulo = articulo;
  }

  if (precio) {
    filter.precio= precio;
  }
  if(tag) {
    filter.tags = tag;
  }

  // recuperar una lista de Anuncios
  Anuncio.lista(filter, skip, limit).then( lista => {
    res.render('index', {
      title: 'NODEPOP',
      lista: lista
  });
  }).catch( err => {
    console.log('Error', err);
    next(err); // para que retorne la página de error
    return;
  });

  //res.render('index', { title: 'Express' });
});

module.exports = router;
