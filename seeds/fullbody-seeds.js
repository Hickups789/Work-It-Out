const { Fullbody } = require("../models");

const fullBodyData = [
  {
    work_out: "Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Dumbell Flies",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Military Press",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Upright Rows",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Dumbbell Curls",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Tricep Pulldowns",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Seated Rows",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Lateral Pulldowns",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Decline Sit Ups",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Med Ball Russian Twist",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Squats",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Walking Dumbbell Lunges",
    sets: 4,
    reps: 20,
  },
];

const seedFullBody = () => Fullbody.bulkCreate(fullBodyData);

module.exports = seedFullBody;
