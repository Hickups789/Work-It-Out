const seedUser = require('./user-seeds');
const seedWorkout = require('./workout-seeds');
const sequelize = require('../config/connection');
const seedExcersize = require('./excersize-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');

  await seedWorkout();
  console.log('--------------');

  await seedUpper();
  console.log('--------------');

  await seedExcersize();
  console.log('--------------');

  process.exit(0);
};

seedAll();
