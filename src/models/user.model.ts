import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Address } from './address.model';

export class Users extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public profile_picture_url?: string;
  public gender?: string;
  public dob?: Date;
  public contact_no?: string;
}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture_url: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
    contact_no: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);

Users.hasMany(Address, {
  foreignKey: 'userId',
  as: 'addresses'
});