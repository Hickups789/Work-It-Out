const { Workout } = require("../models");

const workoutBodyData = [
  {
    id: 1,
    workout_name:'Upper',
  },
  {
    id: 2,
    workout_name:'Lower',
  },
  {
    id: 3,
    workout_name:'Full Body',
  },
];

const seedLower = () => Lower.bulkCreate(workoutBodyData);

module.exports = seedLower;
