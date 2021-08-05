import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(String(process.env.DB_URL));

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to sync database:', error);
  });

export default sequelize;
