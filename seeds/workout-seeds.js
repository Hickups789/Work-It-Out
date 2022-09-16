const { Workout } = require("../models");

const workoutData = [
  {
    work_out: "Back Squat",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Hip Thrust",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Romanian Deadlift",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Front Squat",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Weighted Step-up",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Lunges",
    sets: 4,
    reps: 20,
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
