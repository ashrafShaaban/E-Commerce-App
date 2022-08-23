import React from 'react'
import { useEffect , useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/index.js'
import './productstyle.css'
const Product = () => {
    const {id}=useParams();
    const [product,setProduct]= useState([]);
    const [loading, setLoading] = useState(false);
   
    const dispatch = useDispatch();

    const addProduct = () =>{
        dispatch(addCart(product));
    }
    useEffect (() =>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading=()=>{
        return(
            <div>
                   Loading.....
            </div>
        );
    }

    const ShowProduct = () => {
        return(
            <div>
               <div className='product-style'>
                <div className='one'>
                  <img src={product.image} alt={product.title} height="350px" width="350px" />

                </div>
                <div className='two'>
                  <h4 className='text-uppercase text-black-50'>
                   {product.category}
                  </h4>
                  <h1 className='display-5'>{product.title}</h1>
                  <p className='lead fw-bolder'>
                   Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                  </p>
                  <h3 className='display-6  fw-bold my-4'>$ {product.price}</h3>
                
                   <p className='lead'>{product.description}
                   </p>
                   <button className='btn btn-outline-dark px-4 py-2'
                   onClick={()=>addProduct(product)}>
                   Add to Cart <i className='fa fa-shopping-cart me-1'></i></button>
                   <NavLink to="/cart" className='btn btn-dark px-3 ms-2 py-2'>Go to Cart <i className='fa fa-shopping-cart me-1'></i></NavLink>
                </div>
                </div>
             </div>
        );
    }
  return (
    <div>
       <div className='container py-5'>
        
            {loading ? <Loading /> : <ShowProduct />}
         
       </div>
    </div>
  )
}

export default Product
