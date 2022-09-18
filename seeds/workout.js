const { Workout } = require("../models");

const workoutData = [
  {
    id: 1,
    workout_name:'Fully Body',
  },
  {
    id: 2,
    workout_name:'Lower Body',
  },
  {
    id: 3,
    workout_name:'Upper Body',
  },
  {
    id:4,
    workout_name:'Abs'
  }
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
