import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/database';
import { Product } from "./product.model";

export class Banner extends Model {

    public product_id!: number;
    public banner_category_name!: string;
    public type!: string;

}

Banner.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        banner_category_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "Banners",
    }
);

Banner.hasMany(Product, {
    sourceKey: 'product_id',
    foreignKey: 'id',
    as: 'product'
})