import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/database';
import { Banner } from "./banner.model";

export class Layout extends Model {

    public order!: any;
    public banner_id!: any;
    public show!: boolean;

}

Layout.init(
    {
        order: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        banner_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        show: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        tableName: "Layouts",
    }
);

Layout.belongsTo(Banner, {
    foreignKey: 'banner_id',
});


Banner.hasMany(Layout, {
    foreignKey: 'banner_id'
});