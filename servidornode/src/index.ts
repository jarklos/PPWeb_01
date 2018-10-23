import Server from './server/server';
import * as path from 'path';

let puerto = 8080;
const server = Server.init(puerto);
server.ponerRutaEstatica(path.join(__dirname, 'public'));

server.start(()=>{
  console.log(`servidor escuchando en el puerto ${puerto}`);
})
