import React,{Fragment} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home.jsx';
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
     <div>
    
        <Navbar />
       <Routes>   
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/products/:id" element={<Product />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/contact" element={<Contact />}/>
      </Routes>
     </div>  
    </BrowserRouter>
  );
}

export default App;
