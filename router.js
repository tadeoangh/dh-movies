let route = function(req, res){
    switch (req.url){
		case '/':
			res.end('Home');
			break;
		case '/enCartelera':
			res.end('En cartelera');
			break;
		case '/masVotadas':
			res.end('Más Votadas');
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