const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class WorkoutTracker extends Model {}

WorkoutTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    work_out_id: {
      type: DataTypes.INTEGER,
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
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouttracker',
  }
);

module.exports = WorkoutTracker;
