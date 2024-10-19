import mysql from "mysql2/promise";
import { Sequelize, DataTypes } from 'sequelize';

export default async function con(data){
    try{
        const connection = await mysql.createConnection({
            "host":"localhost",
            "user":"root",
            "password1":"11819",
            "database":data
        });
        
        connection.connect();
        return connection;
    }
    catch(err){
        if(err.errno==1049){
            console.log("create a database");
            const connection = await mysql.createConnection({
                "host":"localhost",
                "user":"root",
                "password1":"11819"
            });

            connection.connect();
            let query = `create database ${data}`
            await connection.query(query);
            return await con(data);
        }
    }
}