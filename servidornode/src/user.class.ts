export class User {
    nombre: string;
    apellidos: string;
    pais: string;
    provincia: string;
    domicilio: string;
    cPostal: number;
    mail: string;
    tel: number;
    password: string;

    constructor(){
        this.apellidos = '';
        this.cPostal = 0;
        this.domicilio = '';
        this.mail = '';
        this.nombre = '';
        this.pais = '';
        this.password = '';
        this.provincia = '';
        this.tel = 0;
    }
}

export class Credenciales {
    mail: string;
    password: string;
}
