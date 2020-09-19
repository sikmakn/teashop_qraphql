import {Sequelize} from 'sequelize-typescript';
import ProductType from "./sequelizeModels/ProductType";
import ProductSubType from "./sequelizeModels/ProductSubType";
import File from "./sequelizeModels/File";
import Order from "./sequelizeModels/Order";
import Product from "./sequelizeModels/Product";
import ProductOrder from "./sequelizeModels/ProductOrder";

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});

sequelize.addModels([ProductType, ProductSubType, File, Order, Product, ProductOrder]);

export async function query(sql: string) {
    return await sequelize.query(sql).then((res: any[]) => res[0]);
}

export default sequelize;