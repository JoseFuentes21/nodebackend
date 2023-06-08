require('dotenv').config()
const http = require("http")

function requestController() {
  // Lógica de nuestra función
  console.log("Hola mundo!!")
}

// Configurar nuestro servidor
const server = http.createServer(requestController)

const PORT =  process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion Coriento en puerto: " + PORT)
})