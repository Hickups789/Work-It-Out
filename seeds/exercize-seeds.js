const { Exercise } = require("../models");

const exercizeData = [
  {
    id:1,
    work_out: "Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Dumbell Flies",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Military Press",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Upright Rows",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Dumbbell Curls",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Tricep Pulldowns",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Seated Rows",
    sets: 4,
    reps: 20,
  },
  {
    id:1,
    work_out: "Lateral Pulldowns",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Decline Sit Ups",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Med Ball Russian Twist",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Squats",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Walking Dumbbell Lunges",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Incline Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Lateral Raises",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Front Raises",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Bent Over Barball Row",
    sets: 4,
    reps: 20,
  },
  {
    id:2,
    work_out: "Dips",
    sets: 4,
    reps: 20,
  }, 
  {
    id:3,
    work_out: "Back Squat",
    sets: 4,
    reps: 20,
  },
  {
    id:3,
    work_out: "Hip Thrust",
    sets: 4,
    reps: 20,
  },
  {
    id:3,
    work_out: "Romanian Deadlift",
    sets: 4,
    reps: 20,
  },
  {
    id:3,
    work_out: "Front Squat",
    sets: 4,
    reps: 20,
  },
  {
    id:3,
    work_out: "Weighted Step-up",
    sets: 4,
    reps: 20,
  },
  {
    id:3,
    work_out: "Lunges",
    sets: 4,
    reps: 20,
  },
];


const seedExercize = () => Exercise.bulkCreate(exercizeData);

module.exports = seedExercize;
