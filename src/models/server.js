const express = require('express');
const cors = require('cors');
const usuariosRouter = require('../routes/usuarios');

class Server {

    apiPaths = {
        usuarios : '/users'
    }


    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4005;
        this.useMiddlewares();
        this.routes();
        
    }
    

    // Usar las rutas
    routes(){
        this.app.use(this.apiPaths.usuarios, usuariosRouter)
    }

    // Middlewares
    useMiddlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );

    }

    // Poner a escuchar el servidor en el puerto
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server listening on the port ${process.env.PORT}`)
        })

    }



}


module.exports = Server;