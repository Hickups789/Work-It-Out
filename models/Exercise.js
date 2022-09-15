const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
  {
    workout_id: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      references: {
        model: 'workout',
        key: 'id'
      }
    },
    
    exercise_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    
    num_sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },

    num_reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
  }
);

module.exports = Exercise;