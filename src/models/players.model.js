import { DataTypes } from 'sequelize';

export const Players = (sequelize) => sequelize.define('players', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nickName: {
    type: DataTypes.STRING
  },
  pictureUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
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
    onDelete: 'CASCADE'
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
