/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bitacora', {
    idBitacora: {
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
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'bitacora'
  });
};
