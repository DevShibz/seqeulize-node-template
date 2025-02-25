import { Model, DataTypes } from 'sequelize';
import { Users } from './user.model';
import { sequelize } from '../config/database';
export class ProductImage extends Model {
  public alt_text!: string;
  public image_url!: string;
  public product_id!: number;
}

ProductImage.init(
  {
    alt_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'productImages',
  }
);