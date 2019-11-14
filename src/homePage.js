let movies = require('../data/movies.json');

let listadoDePeliculas = movies.movies.map(function (movie){
    return movie.title
}).sort().join('\n\n')


let home = `<h1>Bienvenidos a DH Movies</h1>
<h3>El mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h3>

<h5>Total de películas en cartelera: ${movies.total_movies}

Listados de películas:
${listadoDePeliculas}</h5>

<h7>Recordá que podés visitar las secciones:
/enCartelera
/masVotadas
/sucursales
/contacto
/preguntasFrecuentes</h7>
`

module.exports = home