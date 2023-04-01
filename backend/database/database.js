import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

const databseConnect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

databseConnect.connect((error) => {
    if (error) {
        throw error;
    }
    const database = process.env.DB_DATABASE;
    console.log(`Connected to the Database: ${database.toLocaleUpperCase()}`);
});

export {
    databseConnect
}