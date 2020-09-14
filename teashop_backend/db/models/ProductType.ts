import sequelize from '../connection';
import {
    Association,
    DataTypes,
    HasManyAddAssociationMixin,
    HasManyCountAssociationsMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    Model,
    Optional
} from 'sequelize';
import ProductSubType from "./ProductSubType";
import {IProductType} from "../types/IProductType";

interface IProductTypeCreation extends Optional<IProductType, "id"> {
}

class ProductType extends Model<IProductType, IProductTypeCreation> implements IProductType {
    id!: string;
    name!: string;

    public getProductSubTypes!: HasManyGetAssociationsMixin<ProductSubType>;
    public addProductSubType!: HasManyAddAssociationMixin<ProductSubType, string>;
    public hasProductSubType!: HasManyHasAssociationMixin<ProductSubType, string>;
    public countProductSubTypes!: HasManyCountAssociationsMixin;

    public readonly productSubTypes?: ProductSubType[];

    public static associations: {
        productSubTypes: Association<ProductType, ProductSubType>;
    }
}

ProductType.init({
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
        }
    },
    {
        sequelize,
        modelName: 'ProductType',
    });

ProductType.hasMany(ProductSubType, {
    onDelete: 'cascade',
    sourceKey: 'id',
    foreignKey: 'productTypeId',
    as: 'productSubTypes'
});

export default ProductType;