import React from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../redux/action/index.js'
import {delCart} from '../redux/action/index.js'
const Cart = () => {
  const state = useSelector((state)=> state.handleCart)

  const dispatch = useDispatch();
  
  const addButton = (product) => {
       dispatch(addCart(product))
  }

  const deleteButton = (product) => {
    dispatch(delCart(product))
}
  const products = (product) => {
      return(
          <div>
            <div className='container'>
              <div className='row mb-4'>
                <div className='col-md-4'>
                <img src={product.image}   alt={product.title} height="200px" width="200px" />
                </div>
                <div className='col-md-4'>
                   <h3>{product.title}</h3>
                   <p className='lead fw-bold'>
                     {product.qty} X  {product.price}$ = $ {product.qty * product.price}
                   </p>
                   <button className='btn btn-outline-dark me-4'
                   onClick={()=>deleteButton(product)} >
                    <i className='fa fa-minus'></i>
                   </button>
                   <button className='btn btn-outline-dark '
                   onClick={()=>addButton(product)}>
                    <i className='fa fa-plus'></i>
                   </button>
                </div>
              </div>


            </div>
        </div>
      );
  }
  return (
    <div>
        {state.length !== 0 && state.map(products)}
    </div>
  )
}

export default Cart
