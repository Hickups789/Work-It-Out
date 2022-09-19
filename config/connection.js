const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize, 
{
HOST: "us-cdbr-east-06.cleardb.net",
USER: "b982418f13fd2b",
PASSWORD: "8b48c179",
DB: "heroku_516b0f3dc834288"
};