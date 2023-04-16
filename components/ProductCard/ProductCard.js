import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useCart from "../../store/useCart";
import styles from './ProductCard.module.scss';

function ProductCard({ title, image, price, id }) {
  const addToCart = useCart((state)=>state.addToCart)
  return (
    <Card className={styles.card} height = "400">
      <CardHeader title={title} height = "50"  className= {styles.header}/>
      <CardMedia component="img" height="194" image={image} alt="image" />

      <CardActions disableSpacing className ={styles.container}>
        <Typography >Price: {price}</Typography>
        <Button variant="contained" startIcon={<ShoppingCartIcon />} 
        onClick={()=>addToCart({title, url: image, price, id})}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
   
  );
}

export default ProductCard;
