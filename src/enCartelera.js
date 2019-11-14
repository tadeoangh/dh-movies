let movies = require('../data/movies.json');

let listadoDePeliculas = movies.movies.map(function (movie){
    let pelisParaCartelera = [movie.title, movie.overview];
    pelisParaCartelera.join('\n\n')
    return pelisParaCartelera
}).sort().join('\n\n')


let enCartelera = `En cartelera
Total de películas: ${movies.total_movies}

Listados de películas:
${listadoDePeliculas}

Recordá que podés visitar las secciones:
/
/masVotadas
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = enCartelera