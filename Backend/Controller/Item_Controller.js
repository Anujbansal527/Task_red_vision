

const Item = require("../Model/item");

const addItem = (req,res) =>{
    
    const { title,description } = req.body;

    try {
        const data = new Item({
            title,description
        })

        if(title === "" && description === ""){
            return res.status(400).json({message:"Please fill all the fields"});
        }

        data.save()
        .then((data)=>{
            res.status(200).json(data);
        }).catch((error)=>{
            res.status(500).json({message:"Something went wrong"});
        })

    } catch (error) {
        res.status(500).json("Error in internal server");
        console.log(error);
    }
}

const getItems = async(req,res) =>{
    try {
        const reponse = await Item.find();
        return res.status(200).json(reponse);   
    } catch (error) {
        res.status(500).json("Error in internal server");
        console.log(error);
    }
} 

const updateItem = async(req,res) =>{
   const {title,description} = req.body;
   const id = req.params.id;
    try {
        const data = await Item.findOneAndUpdate(id.id,{title,description})
        return res.status(200).json(data);
   } catch (error) {
        res.status(500).json("Error in internal server");
   }
    
}

const getOneItem = (req,res) => {
    const {id} = req.params;
    try {
        const data = Item.findById({})
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Error in internal server");
        console.log(error);
    }
}

const deleteItem = async(req,res) => {
    const id = req.params;
    try {
        await Item.findByIdAndDelete({_id:id.id}).then(()=>{
            res.status(500).json("deleted")
        }).catch((er)=>{
            console.log(er)
        })
    } catch (error) { 
        cosnole
        res.status(500).json("Error in internal server");
        console.log(error);
    }
}

module.exports = { addItem, getItems , deleteItem , updateItem , getOneItem}