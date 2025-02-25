import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Product } from './product.model';
import { Users } from './user.model';
export class Cart extends Model {
  public product!:any
  public quantity!:any
  
}

Cart.init(
  {
    product_id:{
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: true, 
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize,
    tableName: 'carts',
  }
);

Cart.belongsTo(Product,{
  foreignKey: 'product_id',  // Changed from 'id'
  as: 'product'  // Added alias
});

// Add the reverse association
Product.hasMany(Cart, {
  foreignKey: 'product_id',
  as: 'carts'
});