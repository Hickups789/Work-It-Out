const seedUser = require('./user-seeds');
const seedExercise = require('./exercise');
const seedWorkout = require('./workout');
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');
  await seedWorkout();
  console.log('--------------');
  await seedExercise();
  console.log('--------------');
  process.exit(0);
};

seedAll();
