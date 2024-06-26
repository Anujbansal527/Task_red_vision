const express = require("express");
const dotenv = require("dotenv");
const Database = require("./Config/Database");
const routes = require("./Routes/itemRoutes");
const cors = require("cors");
dotenv.config();

const PORT = process.env.URL || 5000 ;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

try {
    Database;
} catch (error) {
    console.log(error);
}

app.listen(PORT,()=>{
    console.log(`Server is created at port at ${PORT}`);
})
