import React from "react";


const Productitem = ({product}) => {
    return ( 
       <div> 
                    
                <div class="card h-100 text-center p-4" key={product.id} >
                <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text lead fw-bold">
                    {product.price}$
                    </p>
                    <a href="#" class="btn btn-outline-dark">Buy Now</a>
                </div>
               
            </div> 
 </div> );
}
 
export default Productitem;