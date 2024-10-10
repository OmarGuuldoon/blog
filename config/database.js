import mysql from 'mysql2/promise';
import dotenv from 'dotenv/config';

const db = mysql.createPool({
    host : process.env.LOCALHOST,
    user : process.env.user,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});


const checkDatabaseConnection = async () => {
    try {
      const [rows] = await db.query("SELECT 1");
      console.log('Database connnection succesfully');
    }
    catch {
      console.error("something went wrong " + error.stack);  
    }
}
    
  
  checkDatabaseConnection();

  
export default db;

