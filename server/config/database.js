const { Sequelize } = require('sequelize');

// Replace the placeholders with your actual database connection details
const databaseConfig = {
  database: 'your_database_name',
  username: 'your_database_username',
  password: 'your_database_password',
  host: 'localhost',
  dialect: 'postgres', // Use the appropriate dialect (mysql, postgres, sqlite, mssql, etc.)
};

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = {
  sequelize,
  connectToDatabase,
};
