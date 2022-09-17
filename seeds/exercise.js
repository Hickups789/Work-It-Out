const { Exercise } = require("../models");

const exerciseData = [
  {
    workout_id: 1,
    exercise_name: "Bench Press",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Dumbell Flies",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Military Press",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Upright Rows",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Dumbbell Curls",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Tricep Pulldowns",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Seated Rows",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Lateral Pulldowns",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Decline Sit Ups",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Med Ball Russian Twist",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Squats",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Walking Dumbbell Lunges",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Back Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Hip Thrust",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Romanian Deadlift",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Front Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Weighted Step-up",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Lunges",
    num_sets: 4,
    num_reps: 20,
  },

];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;
