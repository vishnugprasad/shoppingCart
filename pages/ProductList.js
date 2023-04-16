import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProductList(response.data);
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing = {2} >
      {productList.map((elem) => {
        return (
            <Grid item xs={4}>
          <ProductCard key = {elem.id}
            title={elem.title}
            image={elem.image}
            price={elem.price}
            id = {elem.id}
          ></ProductCard>
        </Grid>
          
        );
      })}
      </Grid>
    </Box>
  );
}

export default ProductList;
