"use strict";

const express = require('express');
const router = express.Router();

// Le pedimos a mongoose que nos de el modelo de Anuncio
// const mongoose = require('mongoose');
// const Anuncio = mongoose.model('Anuncio');

const Tags = require('../../models/Tags');
// GET /
router.get('/', (req, res, next) => {
  Tags.find({}, (err, lista) => {
    if (err) {
      console.log('Error', err);
      next(err); // para que retorne la página de error
      return;
    }
    res.json({ success: true, rows: lista });
  });
});

module.exports = router;
