let faqs = require('../data/faqs.json');
let helpers = require('../customFunctions');


let preguntasFrecuentes = `En cartelera
Total de pregutnas: ${faqs.length}

Listados de preguntas:
${helpers.listaPreguntas}

Recordá que podés visitar las secciones:
/
/enCartelera
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = preguntasFrecuentes