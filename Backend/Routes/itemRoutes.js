const { getItems, getOneItem, addItem, updateItem, deleteItem } = require("../Controller/Item_Controller");

const express = require("express");

const routes = express.Router();

routes.get("/", (req,res)=>{
    res.send("<h1>Hello</h1>")
});

routes.route("/item").get(getItems);
routes.route("/item/:id").get(getOneItem);
routes.route("/item").post(addItem);
routes.route("/item/:id").put(updateItem);
routes.route("/item/:id").delete(deleteItem);


module.exports = routes; 