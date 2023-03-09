'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class presensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.karyawan, {
        foreignKey: 'karyawan_id'
      })
    }
  }
  presensi.init({
    clock_in: DataTypes.DATE,
    clock_out: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'presensi',
  });
  return presensi;
};