const { Exercise } = require("../models");

const exerciseData = [
  {
    workout_id: 3,
    exercise_name: "Bench Press",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Dumbell Flies",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Military Press",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Upright Rows",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Dumbbell Curls",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Tricep Pulldowns",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
    exercise_name: "Seated Rows",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 3,
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
    workout_id: 1,
    exercise_name: "Back Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Hip Thrust",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Romanian Deadlift",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Front Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Weighted Step-up",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 1,
    exercise_name: "Lunges",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Dumbbell Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Bulgarian Split Squat",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Lateral Lunges",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Glute Bridge",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Seated Calf Raise",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Reverse Lunge",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 2,
    exercise_name: "Kettlebell swing",
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
    exercise_name: "Weighted Step Up",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Side Plank",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Plank",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Mountian Climbers",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Crunches",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Barbell Russian Twist",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Sit Ups",
    num_sets: 4,
    num_reps: 20,
  },
  {
    workout_id: 4,
    exercise_name: "Ab Wheel Roll",
    num_sets: 4,
    num_reps: 20,
  },

];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;
