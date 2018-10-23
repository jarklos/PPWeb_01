import {DataType, Table, Column, PrimaryKey, AutoIncrement, AllowNull, Model, HasOne, ForeignKey, Max, Length, Validator, Unique } from 'sequelize-typescript';
import usuarios from './usuarios';
/*
  ADD PRIMARY KEY (`dir_id`),
  ADD UNIQUE KEY `uk_dir_usu_id` (`dir_id`,`dir_usu_id`) USING BTREE,
  ADD KEY `fk_dir_usu` (`dir_usu_id`),
  ADD KEY `fk_dir_tva` (`dir_tva_cod`);

*/
@Table({
    indexes: [
    {
        name: 'fk_dir_usu',
        fields: ['dir_usu_id']
    },
    {
        name: 'fk_dir_tva',
        fields: ['dir_tva_cod']
    }
]
})
export default class direcciones extends Model<direcciones> {
    // `dir_id` int(11) NOT NULL,
    @PrimaryKey
    @AutoIncrement
    @Column({unique: 'uk_dir_usu_id'})
    dir_id: number;

    /* `dir_usu_id` int(11) NOT NULL,
        ADD UNIQUE KEY `uk_dir_usu_id` (`dir_id`,`dir_usu_id`) USING BTREE,
        ADD CONSTRAINT `fk_dir_usu` FOREIGN KEY (`dir_usu_id`) REFERENCES `usuarios` (`usu_id`);
    */
    @ForeignKey(() => usuarios)
    @AllowNull(false)
    @Column({unique: 'uk_dir_usu_id'})
    dir_usu_id: number;
    
    // `dir_pais` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
    @AllowNull(false)
    @Length({max: 100, msg: 'no pueden ser más de 100 caracteres'})
    @Column
    dir_pais: string;
    
    // `dir_provincia` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
    @AllowNull(false)
    @Length({max: 100, msg: 'no pueden ser más de 100 caracteres'})
    @Column
    dir_provincia: string;
    
    // `dir_poblacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
    @AllowNull(false)
    @Length({max: 100, msg: 'no pueden ser más de 100 caracteres'})
    @Column
    dir_poblacion: string;
    
    // `dir_cp` varchar(5) COLLATE utf8_spanish2_ci NOT NULL,
    @AllowNull(false)
    @Length({max: 5, msg: 'no pueden ser más de 5 caracteres'})
    @Column
    dir_cp: string;
    
    /* `dir_tva_cod` varchar(3) COLLATE utf8_spanish2_ci DEFAULT NULL,
    ALTER TABLE `direcciones`
  ADD CONSTRAINT `fk_dir_tva` FOREIGN KEY (`dir_tva_cod`) REFERENCES `tipo_via` (`tva_cod`),

    */
    @AllowNull(true)
    @Length({max: 3, msg: 'no pueden ser más de 3 caracteres'})
    @Column({defaultValue: null})
    dir_tva_cod: string;
    
    // `dir_nombre_via` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
    @AllowNull(true)
    @Length({max: 100})
    @Column({defaultValue: null})
    dir_nombre_via: string;
    
    // `dir_numero` int(11) NOT NULL,
    @AllowNull(false)
    @Column
    dir_numero: number;
    
    // `dir_escalera` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
    @Length({max: 30})
    @Column({defaultValue: null})
    dir_escalera: string;
    
    
    // `dir_piso` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
    @Length({max: 30})
    @Column({defaultValue: null})
    dir_piso: string;
    
    // `dir_puerta` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
    @Length({max: 30})
    @Column({defaultValue: null})
    dir_puerta: string;
    
    // `dir_direccion_larga` varchar(200) COLLATE utf8_spanish2_ci NOT NULL
    @AllowNull(false)
    @Length({max: 200})
    @Column
    dir_direccion_larga: string;
}