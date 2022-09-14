// import all models
const Workout = require('./Workout');
const User = require('./User');
const WorkoutTracker = require('./WorkoutTracker');
const Exercise = require('./Exercise');


User.hasMany(Post, {
    foreignKey: 'user_id'
  });

User.belongsToMany(Post, {
through: Vote,
as: 'voted_posts',

foreignKey: 'user_id',
onDelete: 'SET NULL'
});

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



