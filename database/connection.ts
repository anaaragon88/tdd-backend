import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const DB_TEST_NAME = process.env.DB_TEST_NAME as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;

const db = new Sequelize(DB_TEST_NAME , DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;
