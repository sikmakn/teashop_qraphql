import sequelize from '../connection';
import {DataTypes, Model} from 'sequelize';
import File from './File';
import ProductType from "./ProductType";
import ProductSubType from "./ProductSubType";
import ProductDescription from "./ProductDescription";
import Order from "./Order";
import ProductOrder from "./ProductOrder";

class Product extends Model {
}

Product.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shortDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inStock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(65, 2),
            allowNull: false
        },
        discount: {
            type: DataTypes.DECIMAL(5, 4),
        }
        // effect: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // packaging: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // taste: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    },
    {
        sequelize,
        modelName: 'Product',
    });

Product.hasMany(File, {onDelete: "cascade"});
Product.hasMany(ProductDescription, {onDelete: "cascade"});

Product.belongsTo(ProductType);
Product.belongsTo(ProductSubType);

Product.belongsToMany(Order, {through:ProductOrder});
Order.belongsToMany(Product, {through:ProductOrder});

export default Product;