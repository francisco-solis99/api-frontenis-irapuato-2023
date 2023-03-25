import { Sequelize } from 'sequelize';

import { Players as playersModel } from '../models/players.model.js';
import { Teams as teamsModel } from '../models/teams.model.js';
import { Groups as groupsModel } from '../models/groups.model.js';
import { Matches as matchesModel } from '../models/matches.model.js';

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// Add models
const models = [playersModel, teamsModel, groupsModel, matchesModel];

for (const model of models) { model(sequelize); };

// Relations
const { players, teams, groups, matches } = sequelize.models;

// A team has many players(2)
teams.hasMany(players);

// A group has many teams
groups.hasMany(teams);

// A teams has many matches
teams.hasMany(matches, { foreignKey: 'teamId1' });
teams.hasMany(matches, { foreignKey: 'teamId2' });

// Export
export default sequelize;
