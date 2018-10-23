// var express = require('express');
import { static as estaticExpress, Router, Request, Response, json, urlencoded } from 'express';
import * as fs from 'fs';
import interfacUsuario from '../modelos/usuarios';
import { Observable } from 'rxjs';
import { User, Credenciales } from '../user.class';

class RouterMeter {
    router: Router;
    constructor(){
      this.router = Router();
      this.routes();
    }

    rutaprincipal(req: Request, res: Response): void {
      console.log('llegamos a la ruta principal');
      let usuario: User = req.body;
      interfacUsuario.insertarUno(usuario)
      .subscribe((usuinsertado => {
        // comprobar que el correo no está repetido
        if (usuinsertado.mail === '') {
          console.log('el usuario ya está registrado con este mail');
        } else {
          console.log('es usuario se ha registrado correctamente');
        }
        res.json(usuinsertado);
      }))
    }

    comprobarcredencial(req: Request, res: Response): void {
      console.log('llegamos al servidor en /api/usuarios/login');
      let usuario: Credenciales = req.body;
      interfacUsuario.buscarUno(usuario)
      .subscribe((encontrado => {
        if (encontrado) {
          if (usuario.mail === encontrado.mail && usuario.password === encontrado.password) { // corregir
            console.log('usuario encontrado');
            // buscar los datos de la tabla personas y ponerlos en el siguiente objeto a devolver
            res.json(encontrado);
          } else {
            res.json('la contraseña no coincide');
          }
        } else {
          res.json('usuario no encontrado');
        }
      }))
    }

    private routes() {
        this.router.post('/',this.rutaprincipal);
        this.router.post('/login',this.comprobarcredencial);
    }
}
const rutameter = new RouterMeter().router;
export default rutameter;
