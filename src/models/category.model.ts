import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Your sequelize connection
import { Product } from './product.model';
import { Image } from './image.model';

export class Category extends Model {
    public id!: number;
    public name!: string;
    public parentId!: number | null;
    public readonly parent?: Category;
    public readonly subcategories?: Category[];

}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Images',
                key: 'id',
            },
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: 'Categories',
    }
);


Category.hasMany(Category, {
    foreignKey: 'parentId',
    as: 'subcategories',
});

Category.hasOne(Image,{
    foreignKey:'id'
})