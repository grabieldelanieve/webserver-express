


const http = require('http');

http.createServer( ( req, resp) => {

let salida = {
    nombre: 'Grabiel',
    edad: 20,
    url: req.url
}

    resp.write(JSON.stringgify(salida));
    resp.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');