import Head from 'next/head';
import styles from './index.module.scss';
import Header from '../components/Header/Header';
import ProductList from './ProductList';
import SideCart from '../components/SideCart/SideCart';
import { AppProvider } from '../appContext';



export default function Home() {
  
  return (
    <AppProvider value = {{name:"vishnu"}}>
    <div className={styles.background}>
      <Header></Header>
      <div className = {styles.appContainer} >
      <ProductList></ProductList>
      <SideCart></SideCart>
      </div>
    </div>
    </AppProvider>
  )
}
