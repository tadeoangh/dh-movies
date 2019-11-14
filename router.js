const home = require('./src/homePage.js');
const enCartelera = require('./src/enCartelera.js');
const masVotadas = require('./src/masVotadas.js');
const sucursales = require('./src/sucursales.js');
const contacto = require('./src/contacto.js');
const preguntasFrecuentes = require('./src/preguntasFrecuentes.js');


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
			res.end(sucursales);
			break;
		case '/contacto':
			res.end(contacto);
			break;
		case '/preguntasFrecuentes':
			res.end(preguntasFrecuentes);
			break;
		default:
			res.end('404 not found')
	}
}

module.exports = route;