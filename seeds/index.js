const seedUsers = require('./user-seeds');
const seedLower = require('./lower-seeds');
const seedUpper = require('./upper-seeds');
const sequelize = require('../config/connection');
const seedFullBody = require('./fullbody-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');

  await seedLower();
  console.log('--------------');

  await seedUpper();
  console.log('--------------');

  await seedFullBody();
  console.log('--------------');

  process.exit(0);
};

seedAll();
