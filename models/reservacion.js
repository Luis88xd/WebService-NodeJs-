/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservacion', {
    idReservacion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    idHotel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hotel',
        key: 'idHotel'
      }
    },
    fechaLlegada: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaSalida: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'reservacion'
  });
};
