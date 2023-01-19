const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('subjects', {
    id:{
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
  );
};
