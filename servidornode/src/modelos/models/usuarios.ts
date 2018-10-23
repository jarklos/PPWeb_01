import {Table, Column, PrimaryKey, AutoIncrement, Model, BelongsTo } from 'sequelize-typescript';
import personas from './personas';
import direcciones from './direcciones';

@Table
export default class usuarios extends Model<usuarios> {
  @PrimaryKey
  @AutoIncrement
  @Column
  usu_id: number;

  @BelongsTo(() => personas, 'usu_per_id')
  persona: personas;

  @BelongsTo(() => direcciones, 'usu_dir_id')
  direccion: direcciones;

  @Column
  usu_per_id: number;

  @Column
  usu_dir_id: number;

  @Column
  usu_dir_id_facturacion: number;

  @Column
  usu_correo: string;

  @Column
  usu_clave: string;
}

