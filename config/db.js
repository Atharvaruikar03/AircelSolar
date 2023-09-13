import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    password:"toor",
    database:"aircelsolar",
    host:"localhost"
});

app.listen(8080,()=>{
    console.log("SERVER IS ON !");
})

app.get("/getproductlist",(req,res) => {
    const q = "select * from product";
    db.query(q ,(err,data) => {
        if(err){
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })
})