const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('prices', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },    
    price: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
  );
};
