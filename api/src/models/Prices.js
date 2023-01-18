const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('prices', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },    
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
