import sequelize from '../connection';
import {DataTypes, Model, Optional} from 'sequelize';
import {IProductSubType} from "../types/IProductSubType";

interface IProductSubTypeCreation extends Optional<IProductSubType, "id"> {
}

class ProductSubType extends Model<IProductSubType, IProductSubTypeCreation> implements IProductSubType {
    public id!: string;
    public name!: string;
    public productTypeId!: string
}

ProductSubType.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            // autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productTypeId: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'ProductSubType',
    });

export default ProductSubType;