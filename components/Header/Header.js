import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from './Header.module.scss';
import { useAppContext } from '../../appContext';



function Header() {
  const appContext = useAppContext()
  console.log(appContext);
  return (
    <Box sx={ styles.container }>
    <AppBar position="static">
      <Toolbar>
      
        <Typography variant="h6" component="div" className={styles.header}>
          META CART 
        </Typography>
        
          <ShoppingCartIcon />
          <Typography component="div" className={styles.name}>{appContext.name}</Typography>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header