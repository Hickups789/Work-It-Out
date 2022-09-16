const sequelize = require('../config/connection');
const { Fullbody, Lower, Upper, User } = require('../models');

const userdata = [
    {
        username: "sadfsafg",
        Email: "asdfgag@vbfd.com",
        password: "password123"
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
