let faqs = require('../data/faqs.json');

let listaPreguntas = faqs.faqs.map(function (pregunta){

    let cadaPregunta = [pregunta.faq_title, '\n\nRespuesta:', pregunta.faq_answer]
    cadaPregunta.join('')
    return cadaPregunta

}).sort().join('\n\n')


let preguntasFrecuentes = `En cartelera
Total de pregutnas: ${faqs.length}

Listados de preguntas:
${listaPreguntas}

Recordá que podés visitar las secciones:
/
/enCartelera
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = preguntasFrecuentes