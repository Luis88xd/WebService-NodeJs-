/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallecomentariorestaurante', {
    idDetalleComentarioRestaurante: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idComentario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'comentario',
        key: 'idComentario'
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
    tableName: 'detallecomentariorestaurante'
  });
};
