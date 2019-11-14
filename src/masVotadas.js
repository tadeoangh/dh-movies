let movies = require('../data/movies.json');

let ordenPorValor = movies.movies.map(function (movie){
    if (movie.vote_average >= 7){
        let votada = [movie.title, '\n\nPuntuación:', movie.vote_average, '\n\nReseña:', movie.overview]
        votada.join('')
        return votada
    }
}).sort().join('\n\n')


let masVotadas = `En cartelera
Total de películas: ${ordenPorValor.length}

Listados de películas:
${ordenPorValor}

Recordá que podés visitar las secciones:
/
/enCartelera
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = masVotadas