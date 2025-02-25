import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Json } from 'sequelize/types/utils';
export class ProductDetails extends Model {

  public product_type!: string;
  public product_info!: Json;
}

ProductDetails.init(
  {
    product_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'ProductDetails',
  }
);