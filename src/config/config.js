// require('dotenv').config();
// const defaultConfig = {
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'mysql'
// };

// module.exports = {
//   development: defaultConfig,
//   production: Object.assign(defaultConfig, {})
// };

import { Sequelize } from 'sequelize';

import { Players as playersModel } from '../models/players.model.js';
import { Teams as teamsModel } from '../models/teams.model.js';

const sequelize = new Sequelize('sqlite://db.sqlite'); // init an instance of Sequelize

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// Add models
const models = [playersModel, teamsModel];

for (const model of models) { model(sequelize); };

// Relations
const { players, teams } = sequelize.models;
teams.hasMany(players);

// Export
export default sequelize;
