import { DataTypes } from 'sequelize';

export const Teams = (sequelize) => sequelize.define('teams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  wins: {
    type: DataTypes.INTEGER
  },
  losses: {
    type: DataTypes.INTEGER
  }
}, {
  hooks: {
    beforeCreate: function (team) {
      team.createdAt = new Date();
      team.updatedAt = new Date();
    },
    beforeUpdate: function (team) {
      team.updatedAt = new Date();
    }
  }
});
