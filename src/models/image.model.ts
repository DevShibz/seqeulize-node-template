import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Category } from './category.model';
export class Image extends Model {
  public alt_text!: string;
  public image_url!: string;
  public product_id!: number;
}

Image.init(
  {
    alt_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'Images',
  }
);