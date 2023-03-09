const { UUIDV4 } = require("sequelize");
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.history, {
        foreignKey: 'karyawan_id'
      })

      this.hasMany(models.presensi, {
        foreignKey: 'karyawan_id'
      })
    }
  }
  karyawan.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'karyawan',
  });
  return karyawan;
};