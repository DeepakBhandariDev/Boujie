import React, {createContext, useState, useEffect} from 'react'
import t1 from "./svg/tshirt/t1.jpg"
import t2 from "./svg/tshirt/t2.jpg"
import t3 from "./svg/tshirt/t3.jpg"
import t4 from "./svg/tshirt/t4.png"
import t5 from "./svg/tshirt/t5.jpg"
import t6 from "./svg/tshirt/t6.jpg"


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
