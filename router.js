const home = require('./src/homePage.js');
const enCartelera = require('./src/enCartelera.js');
const masVotadas = require('./src/masVotadas.js');

let route = function(req, res){
    switch (req.url){
		case '/':
			res.end(home);
			break;
		case '/enCartelera':
			res.end(enCartelera);
			break;
		case '/masVotadas':
			res.end(masVotadas);
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntasFrecuentes':
			res.end('Preguntas Frecuentes');
			break;
		default:
			res.end('404 not found')
	}
}

module.exports = route;