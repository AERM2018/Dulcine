
const { Router } = require('express');
const { getUsuarios,crearUsuario } = require('../controllers/usuariosController');


const usuariosRouter = Router();

usuariosRouter.get('/', getUsuarios );
usuariosRouter.post('/',crearUsuario );


module.exports = usuariosRouter