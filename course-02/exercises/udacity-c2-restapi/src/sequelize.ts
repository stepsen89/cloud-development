import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

console.log("Creating sequelize");
// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  username: c.username,
  password: c.password,
  host: c.host,
  database: c.database,
  dialect: 'postgres',
  storage: ':memory:',
  logging: (...msg) => console.log(msg)
});

console.log("Created sequelize");

// export const sequelize = new Sequelize(`postgres//${c.username}:${c.password}@${c.host}/`)
