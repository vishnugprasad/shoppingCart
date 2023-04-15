import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

function ProductCard({ title, image, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={image} alt="image" />

      <CardActions disableSpacing>
        <Button variant="contained" startIcon={<ShoppingCartIcon />}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    // <div>
    //   <div>
    //   {
    //     title
    //   }
    //   </div>

    //   <div>
    //     <img src = {image}></img>
    //   </div>

    //   <div>
    //     {
    //         price
    //     }
    //   </div>

    // </div>
  );
}

export default ProductCard;
