import pkg from 'pg'
const {Pool} = pkg;

export default function dbConnect(){
    const pool = new Pool({
        host:"aws-0-ap-south-1.pooler.supabase.com",
        port:"6543",
        user:"postgres.horfkfwbematpjnqneyz",
        password:"arShad@786",
        database:"postgres",
        ssl:{rejectUnauthorized:false,},
    });

    return pool;
}