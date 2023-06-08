const http = require("http")

function requestController() {
  // Lógica de nuestra función
  console.log("Hola mundo!!")
}

// Configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)