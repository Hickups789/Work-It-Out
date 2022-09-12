const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fullbody extends Model {}

Fullbody.init(
  {
    work_out: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },

    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "fullbody",
  }
);

module.exports = Fullbody;
