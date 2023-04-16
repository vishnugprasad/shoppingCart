import React from "react";
import useCart from "../../store/useCart";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./SideCart.module.scss";
import { ClassNames } from "@emotion/react";

function SideCart() {
  const { cart, remove, totalPrice } = useCart((state) => ({
    cart: state.cart,
    remove: state.removeFromCart,
    totalPrice: state.totalPrice,
  }));

  return (
    <Box className={styles.container}>
      {Object.values(cart).map((item, index) => {
        return (
          <Card className={styles.card} key={`${item.key}-${index}`}>
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50, margin: "auto 0" }}
              image={item.imageUrl}
              alt="Live from space album cover"
            />
            <Box className={styles.box}>
              <CardContent className={styles.cardContent}>
                <Typography component="div" variant="h6">
                  {item.title}
                </Typography>
              </CardContent>
              <Box className={styles.boxActions} sx={{ pl: 1, pb: 1 }}>
                <Typography variant="h7">₹{item.price * item.count}</Typography>
                <CardActions>
                  <Button onClick={() => remove(item.id, item.price)}>
                    REMOVE
                  </Button>
                </CardActions>
              </Box>
            </Box>
            {item.count > 1 && (
              <Typography variant="h7" component="div" className={styles.quantity}>
                {" "}
                {`x ${item.count}`}
              </Typography>
            )}
          </Card>
        );
      })}
      <Typography>Total: {totalPrice}</Typography>
    </Box>
  );
}

export default SideCart;
