import { DataTypes } from 'sequelize';

export const Teams = (sequelize) => sequelize.define('teams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hour: {
    type: DataTypes.TIME
  },
  pointsTeam1: {
    type: DataTypes.INTEGER
  },
  pointsTeam2: {
    type: DataTypes.INTEGER
  },
  team1Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  },
  team2Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
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
