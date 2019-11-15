let theaters = require('../data/theaters.json');
let helpers = require('../customFunctions');

let sucursales = `Nuestras Salas
Total de salas: ${theaters.total_theaters}

Listados de salas:
${helpers.listaSalas}

Recordá que podés visitar las secciones:
/
/enCartelera
/masVotadas
/contacto
/preguntasFrecuentes
`

module.exports = sucursales