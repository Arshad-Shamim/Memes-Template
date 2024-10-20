import { data } from '../controller/index.mjs';
import con from './databse.mjs';
import {memesJson} from './memejson.js';

async function storeUser(data){
    try{
            const database=await con("Pmeme");
            let query  = `insert into users value(\"${data.username}\",\"${data.password}\")`;
            let result = await database.query(query);
            return result;
    }
    catch(err){
        if(err.errno==1146){
            const database = await con("pmeme");
            let query = "create table data(id varchar(50) primary key,name varchar(100),url varchar(100))";
            const result = await database.query(query);
            return await storeUser(data);
        }
        else
            console.log(err);
    }
}   

async function verifyUser(data){
    const database = await con("Pmeme");
    let query = `select username from users where username=\"${data.username}\" and password=\"${data.password}\"`
    const result = await database.query(query);
    return result[0];
}

async function fetchdata(){
    try{
        const database = await con("pmeme");
        const result = await database.query("select * from data");
        return result[0];
    }
    catch(err){
        if(err.errno==1146){
            const database = await con("pmeme");
            let query = "create table data(id varchar(50) primary key,name varchar(100),url varchar(100))";
            let result = await database.query(query);
            
            memesJson.map(async (el)=>{
                query =`insert into data value(\"${el.id}\",\"${el.name}\",\"${el.url}\")`;
                result  = await database.query(query);
            });
            
            const data = await database.query("select * from data");

            return await fetchdata();
        }
        else
            console.log(err);
    }
}


export {storeUser,verifyUser,fetchdata}