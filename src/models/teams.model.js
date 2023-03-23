import { DataTypes } from 'sequelize';

export const Teams = (sequelize) => sequelize.define('teams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  wins: {
    type: DataTypes.INTEGER
  },
  gamesPlayed: {
    type: DataTypes.INTEGER
  },
  player1Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'players',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  },
  player2Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'players',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
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
