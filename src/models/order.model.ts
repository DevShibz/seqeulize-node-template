import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Product } from './product.model';
import { Users } from './user.model';

export class Orders extends Model {
    public user_id!: number;
    public product_id!: number;
    public price!: number;
    public delivery_charge!: number;
    public address_id!: number;
    public status!: string;
}

Orders.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        delievery_charge: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'Orders',
    }
);

Orders.belongsTo(Users, { foreignKey: 'user_id' });
Orders.belongsTo(Product, { foreignKey: 'product_id' });
