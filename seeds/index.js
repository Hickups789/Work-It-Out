const seedUser = require('./user-seeds');
const seedLower = require('./workout-seeds');
const seedUpper = require('./upper-seeds');
const sequelize = require('../config/connection');
const seedExcersize = require('./Excersize-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');

  await seedLower();
  console.log('--------------');

  await seedUpper();
  console.log('--------------');

  await seedExcersize();
  console.log('--------------');

  process.exit(0);
};

seedAll();
