const Server = require("./src/models/server");
const dotenv = require('dotenv');
const db = require("./src/db/connector");

// Configurar dotenv
dotenv.config()

// Instancia del servidor
const server = new Server();

// Conectar base de datos
db.authenticate()
.then( res => {
    console.log("DB online")
}).catch( err => {
    console.log(err)
})

// Poner a escuchar el servidor
server.listen()




