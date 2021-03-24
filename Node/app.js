let http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    switch(req.url) {
        case '/':
            res.end('Bienvenido a mi homepage');
            break;
        case '/productos':
            res.end('Estos son nuestros productos');
            break;
        default:
            res.end('Error, intente de nuevo mas tarde');
            break;    
    }
 
    res.end('Terminado');


}).listen(3030, 'localHost');