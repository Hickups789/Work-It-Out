const { Workout } = require("../models");

const workoutData = [
  {
   id:1,
   workout_name:"upper"
  },
  {
    id:2,
    workout_name:"fullbody"
  },
  {
    id:3,
    workout_name:"lower"
  }
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
