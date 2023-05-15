import {useEffect} from "react";
import { useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import { selectItem } from '../features/cart/cartSlice';
import Navbar from '../components/Navbar';
import Home from './Home';
import Product from './Product';
import Category from './Category';
import Cart from './Cart';
import Contact from './Contact';
import Orders from './Orders';
import Notfound from './Notfound';
import Footer from '../components/Footer';
import About from './About';
import Success from './Success';
function Pages() {
  const items = useSelector(selectItem);
  // as the user adds to thier cart we store it in local storage in case they refresh the app.
  useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(items));
  },[items])
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='product/:id' element={<Product/>}/>
          <Route path='category/:categoryname' element={<Category/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path="about" element={<About/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default Pages;