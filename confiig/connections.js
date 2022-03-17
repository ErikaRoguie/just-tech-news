// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL){
  sequelize= new Sequelize(process.env.JAWSDB_URL);
}else{
// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
}

module.exports = sequelize;