import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TopMenu from './components/TopMenu'
import Products from './components/Products'
import useFetch from './hooks/useFetch'
import { urlApi } from './utils/constans'
import {Storage_Products_Cart} from  './utils/constans'

function App() {

  const products= useFetch(urlApi, null);
  const [productsCart, setProductsCard] =useState([]) 

  useEffect(() => {
    getProductsCart()
  }, [])
  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(Storage_Products_Cart)

    if(idsProducts) {
      const idsProductsSplit = idsProducts.split(',')
      setProductsCard(idsProductsSplit)
    }else{
      setProductsCard([])
    }
  } 
  

  const addProductCart = (id, name) => {
    const idsProducts = productsCart
    idsProducts.push(id)
    setProductsCard(idsProducts)
    localStorage.setItem(Storage_Products_Cart, productsCart)
    getProductsCart()
    toast.success(`${name} Añadido exitosamente al carrito`)

  }



    return (
    <div >
    <body background="\img\qqq.jpg">
    <TopMenu productsCart = {productsCart} getProductsCart={getProductsCart} products={products} />
    <Products products={products} addProductCart={addProductCart}/>
    <ToastContainer
    position='bottom-left'
    autoClose={5000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnVisivilityChange={false}
    draggable
    pauseOnHover={false}
    />
    </body>
  </div>
  
  );
}

export default App; 
