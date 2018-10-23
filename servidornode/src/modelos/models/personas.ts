import {BelongsTo, DataType, Table, Column, PrimaryKey, AutoIncrement, AllowNull, Model, HasOne, ForeignKey } from 'sequelize-typescript';
import usuarios from './usuarios';

@Table
export default class personas extends Model<personas> {
  @PrimaryKey
  @AutoIncrement
  @Column
  per_id: number;

/*   @BelongsTo(() => usuarios, 'per_id')
  usuario: usuarios; */

  @AllowNull(true)
  @ForeignKey(() => usuarios)
  @Column
  per_usu_id: number;

  @AllowNull(false)
  @Column
  per_tpe_cod: string;

  @AllowNull(false)
  @Column
  per_tdc_cod: string;

  @AllowNull(false)
  @Column
  per_nombre: string;

  @AllowNull(false)
  @Column
  per_apellidos: string;

  @AllowNull(false)
  @Column
  per_razon_social: string;
}
