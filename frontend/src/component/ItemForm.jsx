

import { Box,Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ItemForm = ({addData,fetchData}) => {

    const [title,setTitle] = useState('')

    const [description,setDescription] = useState('')

    const handelSubmit = (e) =>{
        e.preventDefault();

        if(title === ''){
            alert('Please Enter Title')
            return;
        }
        else if(description === ''){
            alert('Please Enter Description')
            return;
        } 
        addData({title,description});
        fetchData();
    }

    useEffect(() => {
        fetchData();
      }, []);

  return (
    <Container style={{ border: "2px dotted black", overflow:"auto" }}>
      <Typography variant="h2">Add Item</Typography>

        <Box sm={{
            height:"auto",
            width:"auto",
            border:"1px solid black"
        }}>
        <form onSubmit={handelSubmit}>
        <TextField  sx={{width:"50vh"}} id="standard-basic" label="Title" variant="standard" onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <TextField sx={{width:"50vh"}} id="standard-basic" label="Description" variant="standard" onChange={(e)=>setDescription(e.target.value)} />
        <br/><br/>
        <Button sx={{width:"50vh"}} variant='contained' type="submit">Add</Button>
        </form>
        <br/>
        </Box>
    </Container>
  )
}

export default ItemForm