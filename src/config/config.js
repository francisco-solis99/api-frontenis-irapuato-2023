import dotenv from 'dotenv';
dotenv.config();

const defaultConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
};

export default {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {})
};
