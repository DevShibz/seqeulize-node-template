import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Address } from './address.model';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;

}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

User.hasMany(Address, {
  foreignKey: 'userId',
  as: 'addresses'
});