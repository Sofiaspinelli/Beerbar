const express = require('express');
const router = express.Router();

const {usuarios, usuarioPorId, productos, productosPorId} = require('../../controllers/api/apiController')
const {paginacion} = require('../../controllers/api/paginacion');

// rutas
router.get('/users', usuarios);
router.get('/users/:id', usuarioPorId);

router.get('/productos', /* productos */ paginacion);
router.get('/productos/:id', productosPorId);


module.exports = router;