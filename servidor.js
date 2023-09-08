//importando modulo nativo http
const http = require('http');
//importando chalk
const chalk = require('chalk');

//constantes host y port
const hostname = '127.0.0.1';
const port = 8080;

//creando servidor
const server = http.createServer((req, res) => {
    //estableciendo codigo de estado
    res.statusCode = 200;
    //mensaje en formato de objeto JSON
    res.setHeader('Content-Type', 'application/json');
        const responseJSON = {
            nombre: "Hector Rojas",
            mensaje: "Saludos desde el servidor"
        }
    res.end(JSON.stringify(responseJSON));
});

//creando listener
server.listen(port, hostname, () => {
    const saludo = chalk.green(`Server running at http://${hostname}:${port}/`)
    console.log(saludo);
});