import { DataTypes } from 'sequelize/';
import sequelize from '../db';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  imagePath: { type: DataTypes.STRING },
});

export default User;
