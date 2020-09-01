import sequelize from '../connection';
import {DataTypes, Model} from 'sequelize';
import ProductSubType from "./ProductSubType";

class ProductType extends Model {
}

ProductType.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'ProductType',
    });

ProductType.hasMany(ProductSubType, { onDelete: "cascade" });

export default ProductType;