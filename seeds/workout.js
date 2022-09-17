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
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
