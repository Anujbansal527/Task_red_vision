

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.DB_URL;

const Database = () => {

    const db =  mongoose.connect(URL)
    .then(()=>{
        console.log("Database is Connected");
    })
    .catch((error)=>{
        console.log(error);
    });
}

module.exports = Database();