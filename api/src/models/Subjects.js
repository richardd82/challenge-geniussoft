const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('subjects', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
