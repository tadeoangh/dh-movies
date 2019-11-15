const index = require('./data/index.js')

let listadoDePeliculas = index.movies.movies.map(function (movie){
    return movie.title
}).sort().join('\n\n')

let pelisEnCartelera = index.movies.movies.map(function (movie){
    let pelisParaCartelera = [movie.title, movie.overview];
    pelisParaCartelera.join('\n\n')
    return pelisParaCartelera
}).sort().join('\n\n')

let ordenPorValor = index.movies.movies.map(function (movie){
    if (movie.vote_average >= 7){
        let votada = [movie.title, '\n\nPuntuación:', movie.vote_average, '\n\nReseña:', movie.overview]
        votada.join('')
        return votada
    }
}).sort().join('\n\n')

let listaPreguntas = index.faqs.faqs.map(function (pregunta){

    let cadaPregunta = [pregunta.faq_title, '\n\nRespuesta:', pregunta.faq_answer]
    cadaPregunta.join('')
    return cadaPregunta

}).sort().join('\n\n')

let listaSalas = index.theaters.theaters.map(function (sala){
    let cadaSala = [sala.name, '\n\nDirección:', sala.address, '\n\nDescripción:', sala.description]
    cadaSala.join('');
    return cadaSala
}).sort().join('\n\n')





module.exports = {
    listadoDePeliculas,
    pelisEnCartelera,
    ordenPorValor,
    listaPreguntas,
    listaSalas
}