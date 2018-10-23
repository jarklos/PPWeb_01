// import * as Sequelize from 'sequelize';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
// import db from './db';
// import * as dbDef from '../models/db';
import { camelize } from '../camelize';
import { Observable } from 'rxjs';
import { User, Credenciales } from '../user.class';

import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'psikydesav04',
  dialect: 'mysql',
  username: 'psiky',
  password: 'supuPsiKy/14',
  modelPaths: [__dirname + '/models']
});

// vamos a hacer un sync a la base de datos para ver qué hace
sequelize.sync({alter: true})
.then((datos) => {
  // console.log('salvado de la estructura al servidor',datos);
  console.log('estructura salvada');
});

import usuarios from './models/usuarios';
import personas from './models/personas';
import { onErrorResumeNext } from 'rxjs/observable/onErrorResumeNext';

class InterfazUsuario {
  constructor(){
  }

  static init(): InterfazUsuario {
    console.log('se instancia el modelo usuarios');
    return new InterfazUsuario();
  }
  updateById (id: number, usu_correo: string, onSuccess?: any, onError?: any) {
    usuarios.update({ usuCorreo: usu_correo},{where: {usuId: id} }).
      then(() => {
        console.log('usuario actualizado');
      }).
      error(() => {
        console.log('error al actualizar el usuario');
      });
  };

  insertarUno(_user: User): Observable<Credenciales> {
    // console.log('_user: ', _user);

    return new Observable(observer => {

      usuarios.findOne({where: {usu_correo: _user.mail}})
      .then(encontrado => {
        if (!encontrado) {
              /*
              (include: [{model: User, include: [Address]}])
              */
             usuarios.create({
              usu_correo: _user.mail,
              usu_clave: _user.password,
              persona: {
                per_nombre: _user.nombre,
                per_apellidos: _user.apellidos,
                per_razon_social: '',
                per_tpe_cod: 'FIS',
                per_tdc_cod: 'DNI',
                
              }
             },{
              include: [{model: personas}]
             }
             )
             .then((usuariocreado) => {
               personas.findOne({where: {per_id: usuariocreado.usu_per_id}})
               .then((pers) => {
                 pers.per_usu_id = usuariocreado.usu_id;
                 pers.save()
                 .then(() => {
                   console.log('salvado');
                 })
               })

              let usumin: Credenciales = { mail: usuariocreado.usu_correo, password: usuariocreado.usu_clave};
              observer.next(usumin);
            })
/*           personas.create({
            // per_id: 0,
            per_nombre: _user.nombre,
            per_apellidos: _user.apellidos,
            per_razon_social: '',
            per_tpe_cod: 'FIS',
            per_tdc_cod: 'DNI',
            // per_usu_id: usuariocreado.usu_id
          })
          .then((personacreada) => {
            usuarios.create({
              // usu_id: null,
              usu_correo: _user.mail,
              usu_clave: _user.password,
              usu_per_id: personacreada.per_id

            })
            .then(usuariocreado => {
              console.log('el número a ver: ', usuariocreado.usu_id);// no sale, era porque no tenía el autoincremento
              personacreada.per_usu_id = usuariocreado.usu_id;
              personacreada.save()
              .then(() => {
                let usumin: Credenciales = { mail: usuariocreado.usu_correo, password: usuariocreado.usu_clave};
                observer.next(usumin);
              })
            })
          }) */
        } else {
          let usuno: Credenciales = { mail: '', password: ''};
          observer.next(usuno);
          console.log('no se inserta');
        }
      })

    })
/*       .catch((error) => {
        console.log(error);
        console.log('no se pudo crear a la persona');
      }) */
  }

  conseguirTodas(): Observable<any> {
    return new Observable( observer => {
      usuarios.findAll({})
      .then((matriz) => {
        observer.next(matriz);
      })
    })
  }
  buscarUno(usuario: Credenciales): Observable<User> {
    // vamos a intentar devolver un objeto de tipo User
    return new Observable( observer => {
      usuarios.findAll({where: {usu_correo: usuario.mail}})
      .then((matriz) => {
        if (matriz[0]) {
          personas.findOne({where: {per_usu_id: matriz[0].usu_id}}) // esto no lo encuentra
          .then((persona) => {
            const userBuscado: User = {
              mail: matriz[0].usu_correo,
              password: matriz[0].usu_clave,
              apellidos: persona.per_apellidos,
              cPostal: 0, // no se guarda en la bd de momento
              domicilio: '',
              nombre: persona.per_nombre,
              provincia: '',
              tel: 0,
              pais: ''
            }
            observer.next(userBuscado);   
          })
        } else {
          observer.next(new User());   
          
        }
      })
    })
  }

   
  build(): any {
    usuarios.build();
 }

  buildall(usuario: any): any {
     usuarios.build(usuario);
  }


  borrarTodos(onSuccess?: any, onError?: any): any {
    usuarios.destroy({where: {}})
    .then(onSuccess)
    .catch(onError);
  }

  insertarMatriz(matriz: any, correcto?: any, enError?: any): Observable<any> {
    let contador = 0;
    return new Observable(observer => {
      matriz.forEach((usu: any, index: any, array: any) => {
        usuarios.build(usu)
        .save()
        .then((x: any) => {
            contador++;
            console.log('usuario salvado: ', x);
            console.log('salvada la matriz');
            if (contador === array.length) {
              console.log('salvadas: ', matriz);
              observer.next(matriz);
              // estoy suponiendo que las instancias (registros) están actualizadas
            }
          }).error(() => {
            console.log('se jodió el guardado de la matriz');
          });
      })
      // mal porque se ejecuta antes las siguientes que el foreach
    })
  };

  retrieveById = function(usu_id: number): Observable<usuarios> {
    return new Observable( observer => {
      usuarios.find({where: {usu_id: usu_id}})
      .then((usuario: usuarios) => {
        observer.next(usuario);
      })
      .error((error: any) => {
        console.log('Error: get falló para el route id: ' + error);
      })
    })
  }

  borrarporId(id: number){
      usuarios.find({where: {usu_id: id}})
      .then((resultado: any) => {
        usuarios.destroy({where: {id: id} }).
          then(() => {
            console.log('usuario borrado de la base de datos');
          }).
          error(() => {
            console.log('error al borrar al usuario de la bd');
          });
    })
  }
  borrarporMail(mail: string): Observable<User> {
    return new Observable(observer => {
      usuarios.findOne({where: {usu_correo: mail}})
      .then(userencontrado => {
        if (userencontrado){
          
          
          personas.update({per_usu_id: null}, {where: {per_id: userencontrado.usu_per_id}})
          .then(personaactualizada => {
            usuarios.destroy({where: {usu_correo: mail} }).
            then(() => {
              console.log('usuario borrado de la base de datos');
              personas.findOne({where: {per_id: userencontrado.usu_per_id}})
              .then(personaaborrar => {
                personaaborrar.destroy()
                .then(() => {
                  const usdevuelto = new User();
                  usdevuelto.mail = mail;
                  observer.next(usdevuelto);
                  console.log('persona borrada de la base de datos');
                })
                .error(() => {
                  console.log('error al borrar a la persona de la bd');
                  observer.next(new User());
                })
              })
            }).
            error(() => {
              console.log('error al borrar al usuario de la bd');
              observer.next(new User());
            });
          })
        } else {
          console.log('el usuario no se encuentra en la base de datos');
          observer.next(new User());
        }
      })
      
    })



  }
}

const interfacUsuario = InterfazUsuario.init();
export default interfacUsuario;
