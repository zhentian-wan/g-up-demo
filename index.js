const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
                             transport: new Transport(
                                 'https://api.graph.cool/simple/v1/silentkangaroo-wasp-569'
                             )
                         });

 function getItems() {
    return client.query(`
      {
      allPersons {
        id,
        name,
        tasks {
          id,
          description
        }
      }
    }
  `)
}

getItems()
    .then((data) => console.log(JSON.stringify(data)));