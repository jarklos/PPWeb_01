import { static as estaticExpress, Router, Request, Response, json, urlencoded } from 'express';
import * as cors from 'cors';
// import * as formidable from 'formidable';
// import * as fs from 'fs';
// import * as path from 'path';
// import * as util from 'util';

import routeradminusuarios from './rutadminusuarios';
// import rutaactualizar from './rutaactualizar';
import rutausuarios from './ruta.usuario.registrologin';

class PostRouter {
    router: Router;
    constructor(){
      this.router = Router();
      this.router.use(cors());
      this.router.use(json());
      this.router.use(urlencoded({ extended: false }));
  
      this.routes();
    }
/*     RecibirFicheros(req: Request, res: Response): void {
        console.log('RecibirFicheros');
        let form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname,'../public/');
        // form.keepExtensions = true;
        console.log(form);
        form.parse(req, function(err, fields,files) {
            console.log(util.inspect({fields: fields, files: files}));
        })
        form.on('file', function(field: any, file: any) {
            console.log('hay file');
          fs.rename(file.path, form.uploadDir + '/' + file.name, function (err) {
            if (err) throw err;
            res.json('recibido');
          });
        })
    } */

    routes() {
        this.router.use('/api/usuarios', rutausuarios);
        this.router.use('/api/adminusuarios', routeradminusuarios);
        // this.router.use('/api/actualizar', rutaactualizar);
        // this.router.post('/api/recibirunicofichero', this.RecibirFicheros);
    }
}

const indexRouter = new PostRouter().router;

export default indexRouter;
