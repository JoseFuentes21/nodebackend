require('dotenv').config()
const http = require("http")
const fs = require("fs")

function requestController(req, res) {
  // Lógica de nuestra función
  const url = req.url;
  const method = req.method;
  console.log({url, method})

   if(method === 'GET' && url === "/"){
        res.setHeader("Content-type", "text/html; charset=utf-8")
        fs.readFile('./public/index.html', function(error, file){
            if(error){
                console.log("HUBO ERROR")
            }
            res.write(file)
            res.end()
        })
        return
    }

    if(method === 'GET' && url === "/about"){
        res.setHeader("Content-type", "text/html; charset=utf-8")
        res.write("<h1>Hola mundo desde pagina ABOUT</h1>")
        res.end()
        return
    }
    res.setHeader("Content-type", "text/html; charset=utf-8")
        res.write("<h1>Pagina no encontrada</h1>")
        res.end()

}

// Configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function () {
  console.log("Aplicación corriendo en puerto: " + PORT)
})