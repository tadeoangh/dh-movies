let theaters = require('../data/theaters.json');

let listaSalas = theaters.theaters.map(function (sala){
        let cadaSala = [sala.name, '\n\nDirección:', sala.address, '\n\nDescripción:', sala.description]
        cadaSala.join('');
        return cadaSala
}).sort().join('\n\n')


let sucursales = `Nuestras Salas
Total de salas: ${theaters.total_theaters}

Listados de salas:
${listaSalas}

Recordá que podés visitar las secciones:
/
/enCartelera
/masVotadas
/contacto
/preguntasFrecuentes
`

module.exports = sucursales