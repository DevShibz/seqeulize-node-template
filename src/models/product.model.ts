import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Import your sequelize instance
import { ProductImage } from './productImage.model';
import { Category } from './category.model';
import { Cart } from './cart.model';

export class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public sku!: string;
    public stock!: number;
    public productType!: string;
    public productInfo!: object; // Use object type for JSON
}

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // SKU should be unique
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_info: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Products',
    }
);

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
});

Product.hasMany(ProductImage, {
    foreignKey: 'id',
    as: 'images'
});


