let movies = require('../data/movies.json');
let helpers = require('../customFunctions');


let enCartelera = `En cartelera
Total de películas: ${movies.total_movies}

Listados de películas:
${helpers.pelisEnCartelera}

Recordá que podés visitar las secciones:
/
/masVotadas
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = enCartelera