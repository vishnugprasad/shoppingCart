import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useCart from "../../store/useCart";

function ProductCard({ title, image, price, id }) {
  const addToCart = useCart((state)=>state.addToCart)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={image} alt="image" />

      <CardActions disableSpacing>
        <Typography >Price: {price}</Typography>
        <Button variant="contained" startIcon={<ShoppingCartIcon />} style={{marginLeft:"auto"}}
        onClick={()=>addToCart({title, url: image, price, id})}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
   
  );
}

export default ProductCard;
