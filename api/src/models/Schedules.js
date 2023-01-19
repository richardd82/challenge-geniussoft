const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('schedules', {
    id:{
      type: DataTypes.INTEGER,
      // defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    from: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    still: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
  );
};
