import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ItemForm from "./ItemForm";
import axios from "axios";
import Item from "./Item";

const URL = "http://localhost:5000";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${URL}/item`);
    setItems(response.data);
  };

  const addData = async ({ title, description }) => {
    const response = await axios.post(`${URL}/item`, { title, description });
  };

  const updateData = async (id,updateData) => {
    const response = await axios.put(`${URL}/item/${id}`, updateData);
    console.log(response)
    let data = items.map(item => (item._id === id ? response.data : item))
    console.log(data)
  };

  const deleteData = async(id) => {
    try {
      const response = await axios.delete(`${URL}/item/${id}`);

      setItems(items.filter(item => item._id !== id));
  } catch (error) {
      console.log(error)
  }
   };

  useEffect(() => {
    fetchData();
  }, [items]);

  return (
    <Container>
    <br/>
      <ItemForm addData={addData} fetchData={fetchData} />
      <hr/>
    <br/>
<Box
   style={{ border: "2px solid grey", overflow:"auto" ,padding:"8px"}}
>
<Typography variant="h2">Items</Typography>
<hr/>
<Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,280px)",
          gap: "5px",
          
        }}
      >

        {items.map((item,index) => {
          return (
            <Item
              key={item._id}
              index={index}
              item={item}
              updateData={updateData}
              deleteData={deleteData}
            />
          );
        })}
      </Box>
</Box>
      
    </Container>
  );
};

export default ItemList;


