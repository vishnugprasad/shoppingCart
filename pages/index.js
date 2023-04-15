import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import ProductList from './ProductList';


export default function Home() {
  return (
    <div>
      <Header></Header>
      <ProductList></ProductList>
    </div>
  )
}
