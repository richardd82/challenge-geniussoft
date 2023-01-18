const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('schedules', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    day: {
      type: DataTypes.ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'),
      allowNull: true,
    },
    from: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    still: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });
};
