import {Sequelize} from 'sequelize';

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

export default new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST
})