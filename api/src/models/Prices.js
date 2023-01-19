const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('prices', {
    id:{
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },    
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
  );
};
