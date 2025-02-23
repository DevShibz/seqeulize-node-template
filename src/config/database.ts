import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config()
export const sequelize = new Sequelize(

  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  String(process.env.DB_PASSWORD),
  {
    host: "localhost",
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT || '5432'),
    logging: false
  }
);
