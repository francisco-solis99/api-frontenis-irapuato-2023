import { DataTypes } from 'sequelize';

export const Groups = (sequelize) => sequelize.define('groups', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: function (group) {
      group.createdAt = new Date();
      group.updatedAt = new Date();
    },
    beforeUpdate: function (group) {
      group.updatedAt = new Date();
    }
  }
});
