import React, {createContext, useState, useEffect} from 'react'
import t1 from "./svg/tshirt/t1.jpg"
import t2 from "./svg/tshirt/t2.jpg"
import t3 from "./svg/tshirt/t3.jpg"
import t4 from "./svg/tshirt/t4.png"
import t5 from "./svg/tshirt/t5.jpg"
import t6 from "./svg/tshirt/t6.jpg"


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "T-shirt 01",
            "images": [
                `${t1}`,
                `${t2}`,
                `${t3}`,
                `${t4}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": "T-shirt 02",
            "images": [
                `${t2}`,
                `${t3}`,
                `${t4}`,
                `${t5}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 150,
            "count": 1
        },
        {
            "_id": "3",
            "title": "T-shirt 03",
            "images": [
            `${t3}`,
            `${t4}`,
            `${t5}`,
            `${t6}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1
        },
        {
            "_id": "4",
            "title": "T-shirt 04",
            "images": [
                `${t4}`,
                `${t5}`,
                `${t6}`,
                `${t1}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1
        },
        {
            "_id": "5",
            "title": "T-shirt 05",
            "images": [
                `${t5}`,
                `${t6}`,
                `${t1}`,
                `${t2}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1
        },
        {
            "_id": "6",
            "title": "T-shirt 06",
            "images": [
                `${t6}`,
                `${t1}`,
                `${t2}`,
                `${t3}`],
            "description": "Hey there, Heres a cool T.",
            "content": "Step up your cool.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        }
    ]);

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
