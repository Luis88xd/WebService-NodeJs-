/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallelugarrestaurante', {
    idDetalleLugarRestaurante: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLugar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lugar',
        key: 'idLugar'
      }
    },
    idRestaurante: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurante',
        key: 'idRestaurante'
      }
    }
  }, {
    tableName: 'detallelugarrestaurante'
  });
};
