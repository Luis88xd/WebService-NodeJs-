/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idRol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'rol',
        key: 'idRol'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usuario'
  });
};
