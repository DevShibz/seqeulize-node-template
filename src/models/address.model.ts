import { Model, DataTypes } from 'sequelize';
import { User } from './user.model';
import { sequelize } from '../config/database';
export class Address extends Model {
  public id!: number;
  public street!: string;
  public city!: string;
  public state!: string;
  public zipcode!: string;
  public userId!: number;
}

Address.init(
  {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'addresses',
  }
);