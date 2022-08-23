import React, {useState,useEffect,Fragment} from 'react'

import { NavLink } from 'react-router-dom';
import './Product.css'
export default function Products() {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted =true;

    useEffect(()=>{
              const getProducts = async () => {
                  setLoading(true);
                  const response = await fetch("https://fakestoreapi.com/products");
              
              if(componentMounted){
                  setData(await response.clone().json());
                  setFilter(await response.json());
                  setLoading(false);
                  console.log(filter);
              }
              return ()=>{
                  componentMounted = false;
              }
            }
            getProducts();
    },[])
    const Loading = () => { 
         return (
             <div>
                        Loading.....
             </div>
         );
    }
    const filterProduct = (cat)=>{
        const updatedlist = data.filter((x)=>x.category === cat
        )
        setFilter(updatedlist);
    }
    const ShowProducts = () => {
        return (
         <div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothes</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothes</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) =>{
                    return(
                        <Fragment>
                           
                             <div className='card-item mb-2 me-2'>
                                <div className="card h-100 p-4 " key={product.id} >
                                <img src={product.image} className="card-img-top" alt={product.title}
                                 />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text lead fw-bold">
                                     {product.price}$
                                    </p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                                </div>
                             </div>  
                            
                         </Fragment>
                        
                    );
                })} 
         </div>
        );
    };
  return (
    <div>
       <div className="container my-5 py-5" >
         <div className="row">
            <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                <hr />
            </div>
            </div>
            <div className="row ">
           {loading ? <Loading />: <ShowProducts />}
         </div>
       </div>
    </div>
  );
}
