import {Sequelize} from 'sequelize'
// const {Sequelize} = require('sequelize')


export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection()
