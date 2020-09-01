import dotenv from 'dotenv';
dotenv.config();
import sequelize from './db/connection';

async function start() {
    await sequelize.sync();
}

start();