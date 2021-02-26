
const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuariosController');


const usuariosRouter = Router();

usuariosRouter.get('/', getUsuarios );


module.exports = usuariosRouter