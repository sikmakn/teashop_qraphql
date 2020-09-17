import {Sequelize} from 'sequelize-typescript';
import ProductType from "./models/ProductType";
import ProductSubType from "./models/ProductSubType";
import File from "./models/File";
import Order from "./models/Order";
import Product from "./models/Product";
import ProductOrder from "./models/ProductOrder";

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});

sequelize.addModels([ProductType, ProductSubType, File, Order, Product, ProductOrder]);

export default sequelize;