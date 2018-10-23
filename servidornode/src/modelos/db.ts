import * as Sequelize from 'sequelize';
import { dev as config } from './database.json';

class CrearDb {
    sequelize: Sequelize.Sequelize;
    constructor(){
        this.sequelize = new Sequelize(
            config.database,
            config.user,
            config.password,
            {
                host: config.host,
                operatorsAliases: false,
                dialect: config.driver,
                logging: console.log,
                define: {
                    timestamps: false
                }
            }
        );
    }
}

const db = new CrearDb().sequelize;
export default db;
