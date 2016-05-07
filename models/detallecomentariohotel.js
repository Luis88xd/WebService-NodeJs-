/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallecomentariohotel', {
    idDetalleComentarioHotel: {
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
    idHotel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hotel',
        key: 'idHotel'
      }
    }
  }, {
    tableName: 'detallecomentariohotel'
  });
};
