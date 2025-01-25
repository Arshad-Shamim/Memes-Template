import { data } from '../controller/index.mjs';
import dbConnect from './databse.mjs';
import {memesJson} from './memejson.js';

async function storeUser(data){
    try{
            const database=dbConnect();
            let query  = `insert into memecraft_user values('${data.username}','${data.password}')`;
            let result = await database.query(query);
            return result;
    }
    catch(err){
        console.log("store error",err);
    }
}   

async function verifyUser(data){
    try{
        const database = dbConnect();
        let query = `select "username" from memecraft_user where "username"='${data.username}' and "password"='${data.password}'`
        const result = await database.query(query);
        return result.rows;
    }
    catch(err){
        console.log("verift error ",err);
    }
}

async function fetchdata(){
    try{
        const database = dbConnect();
        const result = await database.query("select * from memecraft_data");
        return result.rows;
    }
    catch(err){
        console.log("fatch :",err);
    }
}


export {storeUser,verifyUser,fetchdata}