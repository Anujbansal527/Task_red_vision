import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const Item = ({ item, updateData, deleteData ,index}) => {

    const [isEdit, setEditing] = useState(false);

    const [title,setTitle] = useState(item.title)

    const [description,setDescription] = useState(item.description)

    const handelUpdate = () => {

    if(title === ''){
        alert('Please Enter Title')
        return;
    }
    else if(description === ''){
        alert('Please Enter Description')  
      return
      } 

    updateData(item._id,{title,description})
    setEditing(false);
  }

  const handelDelete = () =>{
    console.log("delete")
    deleteData(item._id);
    window.location.reload();
  }

  return (
    <Container style={{ border: "2px dotted black", overflow:"auto" }}>
      <p style={{position:"absolute"}}>{index+1}</p>
      {isEdit ? (
        <Box
        sx={{padding:"5px" , margin:"5px"}}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handelUpdate}>
            Update
          </Button>
        </Box>
      ) : (
        <Box
        sx={{padding:" 2px 2px 2px 2px "}}>
          <h3>{(item.title.length > 15) ? item.title.substring(0, 15) + "..." : item.title}</h3>
          <p>{(item.description.length > 15 ) ? item.description.substring(0,15)+"..." : item.description}</p>
          <Button variant="primary" onClick={() => setEditing(true)}>
            Edit
          </Button>
          <Button variant="secondary" onClick={handelDelete}>Delete</Button>
        </Box>
      )}
      <Box></Box>
    </Container>
  );
};

export default Item;
