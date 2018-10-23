import express = require('express');
import indexRouter from '../rutas/index';

export default class Server{
  public app : express.Application;

  constructor(private port : number){
    this.app = express();
    this.app.use('/',indexRouter);
  }

  start(callback?: Function){
    this.app.listen(this.port,callback);
  }


  static init(port : number) : Server{
    return new Server(port);
  }

  public ponerRutaEstatica(rutaactual: string): void {
    this.app.use('/public', express.static(rutaactual));
  }
}
