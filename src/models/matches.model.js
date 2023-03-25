import { DataTypes } from 'sequelize';

export const Matches = (sequelize) => sequelize.define('matches', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hour: {
    type: DataTypes.TIME,
    allowNull: false
  },
  pointsTeam1: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pointsTeam2: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teamId1: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    }
  },
  teamId2: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    }
  }
}, {
  hooks: {
    beforeCreate: function (match) {
      match.createdAt = new Date();
      match.updatedAt = new Date();
    },
    beforeUpdate: function (match) {
      match.updatedAt = new Date();
    }
  }
});
