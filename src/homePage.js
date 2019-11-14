let movies = require('../data/movies.json');

let listadoDePeliculas = movies.movies.map(function (movie){
    return movie.title
}).sort().join('\n\n')


let home = `Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.

Total de películas en cartelera: ${movies.total_movies}

Listados de películas:
${listadoDePeliculas}

Recordá que podés visitar las secciones:
/enCartelera
/masVotadas
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = home