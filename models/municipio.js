/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('municipio', {
    idMunicipio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idDepartamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'departamento',
        key: 'idDepartamento'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'municipio'
  });
};
