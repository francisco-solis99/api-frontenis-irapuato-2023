import { DataTypes } from 'sequelize';

export const Players = (sequelize) => sequelize.define('players', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING
  },
  teamId: {
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
    beforeCreate: function (player) {
      player.createdAt = new Date();
      player.updatedAt = new Date();
    },
    beforeUpdate: function (player) {
      player.updatedAt = new Date();
    }
  }
});
