'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Letter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Letter.hasMany(models.Comment, {
        foreignKey: "letterId",
        sourceKey: "id",
        onDelete: "cascade"
      })
    }
  };
  Letter.init({
    userId: DataTypes.INTEGER,
    initial: DataTypes.STRING,
    customdear: DataTypes.STRING,
    content: DataTypes.STRING,
    ps: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Letter',
  });
  return Letter;
};