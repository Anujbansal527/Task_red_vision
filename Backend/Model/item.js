
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("items",ItemSchema);