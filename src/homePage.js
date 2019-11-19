let movies = require('../data/movies.json');
let helpers = require('../customFunctions');

let home = `Bienvenidos a DH Movies!!
El mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.

Total de películas en cartelera: ${movies.total_movies}

Listados de películas:
${helpers.listadoDePeliculas}

Recordá que podés visitar las secciones:
/enCartelera
/masVotadas
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = home