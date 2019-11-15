let helpers = require('../customFunctions');


let masVotadas = `En cartelera
Total de películas: ${helpers.ordenPorValor.length}

Listados de películas:
${helpers.ordenPorValor}

Recordá que podés visitar las secciones:
/
/enCartelera
/sucursales
/contacto
/preguntasFrecuentes
`

module.exports = masVotadas