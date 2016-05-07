/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lugar', {
    idLugar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idMunicipio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'municipio',
        key: 'idMunicipio'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'lugar'
  });
};
