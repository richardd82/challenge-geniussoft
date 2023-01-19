const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('days', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
  );
};