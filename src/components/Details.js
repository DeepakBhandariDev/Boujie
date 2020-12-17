import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import { DataContext } from './DataProvider';

export default function Details() {
    const {id} = useParams();
    const [products, setProducts] = useContext(DataContext);

    const details = products.filter((product, index) =>{
        return product._id === id;
    })


    return (
        <>
          {
          details.map(product =>(
              <div className="details" key={product._id}>
              <div className="img-container" 
              style={{backgroundImage: `url(${product.images[0]})`}} />

                <div className="box-details">
                    <h2 title = {product.title}>{product.title}</h2>
                    <h3>${product.price}</h3>
                    
                    <div className="colors">
                        {
                            product.colors.map((color,index) =>(
                                <button key="index" style={{background: color}}></button>
                            ))
                        }
                    </div>

                    <div className="sizes">
                        {
                            product.sizes.map((size,index) =>(
                                <button key="index">{size}</button>
                            ))
                        }
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <div className="thumb">
                        {
                            product.images.map((img, index) =>(
                                <img src={img} alt="" key={index}/>
                            ))
                        }
                    </div>
                    <button className="cart">Add to Cart</button>
                </div>
              
              </div>
          ))
          }  
        </>
    )
}
