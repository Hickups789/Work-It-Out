const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(jrghv23tdma7fzvg, oubwz34876531k3j, fursenat1gp4p6cl, {
    host: 'migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
  });
}
module.exports = sequelize;