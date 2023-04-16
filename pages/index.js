import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import ProductList from './ProductList';
import SideCart from '../components/SideCart/SideCart';


export default function Home() {
  return (
    <div>
      <Header></Header>
      <div style={{display:'flex', flexDirection: 'row'}}>
      <ProductList></ProductList>
      <SideCart></SideCart>
      </div>
    </div>
  )
}
