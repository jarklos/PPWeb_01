// var express = require('express');
import { static as estaticExpress, Router, Request, Response, json, urlencoded } from 'express';
import * as fs from 'fs';
import interfacUsuario from '../modelos/usuarios';

class RouterMeter {
    router: Router;
    constructor(){
      this.router = Router();
      this.routes();
    }
    rutaprincipal(req: Request, res: Response): void {
        interfacUsuario.buildall(
            {
                usuId: req.params.id,
                usuPerId: req.body.usuperid,
                usuClave: req.body.usuclave,
                usuCorreo: req.body.usucorreo
            }
        );
        interfacUsuario.updateById(req.params.id, req.body.usucorreo);
        res.end();
    }
    rutaborrarid(req: Request, res: Response): void {
        interfacUsuario.borrarporId(req.params.id);
        res.end();
    }
    private routes() {
        this.router.put('/:id',this.rutaprincipal);
        this.router.delete('/:id',this.rutaborrarid);
    }
}
const rutameter = new RouterMeter().router;
export default rutameter;
