const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class WorkoutTracker extends Model {}

WorkoutTracker.init(
  {
    work_out_id: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      references: {
        model: 'workout',
        key: 'id'
      }
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    created_at: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "upper",
  }
);

module.exports = WorkoutTracker;
