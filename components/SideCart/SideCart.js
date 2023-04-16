import React from "react";
import useCart from "../../store/useCart";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function SideCart() {
  const {cart, remove, totalPrice} = useCart((state) => ({cart:state.cart, remove : state.removeFromCart, totalPrice :state.totalPrice }));

 
  return (
    <Box style={{ minWidth: "24%" }}>
      
      {Object.values(cart).map((item, index) => {
        return (
          <Card sx={{ display: "flex", flex: "1 0 1"  }} key = {`${item.key}-${index}`}>
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50, margin: "auto 0" }}
              image={item.imageUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  {item.title}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
               <Typography variant="h7">
               ₹{item.price*item.count}
               </Typography>
               <CardActions>
                <Button onClick={()=>remove(item.id, item.price)}>REMOVE</Button>
               </CardActions>
              </Box>
            </Box>
            {item.count > 1 && (<Typography variant="h7" component= "div" sx={{alignSelf: "center", whiteSpace: "nowrap"}}> {`x ${item.count}`}</Typography>)}
          </Card>
        );
      })}
      <Typography>Total: {totalPrice}</Typography>
    </Box>
  );
}

export default SideCart;
