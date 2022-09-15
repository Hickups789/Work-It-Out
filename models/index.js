// import all models
const Workout = require('./Workout');
const User = require('./User');
const WorkoutTracker = require('./WorkoutTracker');
const Exercise = require('./Exercise');


User.hasMany(WorkoutTracker, {
    foreignKey: 'user_id'
  });
WorkoutTracker.belongsTo(User, {
    foreignKey: 'user_id'
  });

Workout.hasMany(WorkoutTracker, {
    foreignKey: 'workout_id'
  });
WorkoutTracker.belongsTo(Workout, {
    foreignKey: 'workout_id'
  });

User.belongsToMany(Workout, {
    through: WorkoutTracker,
    as: 'workouts',
})

Workout.belongsToMany(User, {
    through: WorkoutTracker,
    as: 'users',
})

Workout.hasMany(Exercise, {
  foreignKey: 'workout_id'
})

Exercise.belongsTo(Workout, {
  foreignKey: 'workout_id'
})


module.exports = { User, Workout, WorkoutTracker, Exercise };


