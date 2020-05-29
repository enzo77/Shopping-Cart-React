import React, {useEffect, useState} from 'react';
import { ToastContainer, toast} from 'react-toastify'
import Topmenu from './componentes/TopMenu'
import Products from './componentes/Products'
import useFetch from './hooks/useFetch'
import { urlApiProducts } from './utils/constants'
import { STORAGE_PRODUCTS_CART } from './utils/constants'

function App() {
  const products = useFetch(urlApiProducts,null)
  const [productsCart, setProductsCart] = useState([])

  useEffect(() => {
    getProductsCart()
  }, [])

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART)

    if(idsProducts){
      const idsProductsSplit = idsProducts.split(',')
      setProductsCart(idsProductsSplit)
     } else {
      setProductsCart([])
    }

}
  const addProductCart = (id, name) => {
    const idProducts = productsCart
    idProducts.push(id)
    setProductsCart(idProducts)
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart )
    getProductsCart()
    toast.success(`${name} añadido al carrito correctamente`)
  }
  
  return (
    <div >
       <Topmenu productsCart={productsCart}/>
       <Products products={products} addProductCart={addProductCart} />
       <ToastContainer 
       position="bottom-left"
       autoClose={5000}
       hideProgressBar
       newestOnTop
       closeOnClick
       rtl={false}
       pauseOnVisibilityChange={false}
       draggable
       pauseOnHover={false}
       />
    </div>
  );
}

export default App;