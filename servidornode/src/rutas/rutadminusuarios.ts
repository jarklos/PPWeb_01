// var express = require('express');
import { static as estaticExpress, Router, Request, Response, json, urlencoded, Errback } from 'express';
import * as fs from 'fs';
import interfacUsuario from '../modelos/usuarios';
import { User } from '../user.class';

class RouterPortada {
    router: Router;
    constructor(){
      this.router = Router();
      this.routes();
    }
    rutaprincipal(req: Request, res: Response): void {
        // node hace nada modeloUsuarios.build();
        interfacUsuario.conseguirTodas()
        .subscribe(usuarios => {
            if (usuarios) {
              res.json(usuarios);
              console.log('usuarios ok');
            } else {
              res.status(401).send("no hay imágenes en la tabla");
            }

        })
    }
    rutaId(req: Request, res: Response): void {
        // no hace nada modeloUsuarios.build();
        interfacUsuario.retrieveById(req.params.id)
        .subscribe(usuario => {
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(500).send('Usuario no encontrado por el id');
            }
        })
    }

    borrarporMail(req: Request, res: Response){
        // modeloUsuarios.borrarporMail('carlosag31@hotmail.com');;
        interfacUsuario.borrarporMail(req.body.mail)
        .subscribe((us: User) => {
            // console.log('us: ', us);
            res.send(us);
        })
    }

    private routes() {
        this.router.post('/',this.borrarporMail);
        this.router.get('/',this.rutaprincipal);
        this.router.get('/:id',this.rutaId);
    }
}
const rutaportada = new RouterPortada().router;
export default rutaportada;
