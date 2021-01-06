import React, {createContext, useState} from 'react'
import t1 from "./svg/tshirt/t1.jpg"
import t2 from "./svg/tshirt/t2.jpg"
import t3 from "./svg/tshirt/t3.jpg"
import t4 from "./svg/tshirt/t4.png"
import t5 from "./svg/tshirt/t5.jpg"
import t6 from "./svg/tshirt/t6.jpg"


export const DataContext = createContext();

export const DataProvider= (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                `${t1}`,
                `${t2}`,
                `${t3}`,
                `${t4}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                `${t2}`,
                `${t3}`,
                `${t4}`,
                `${t5}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
            `${t3}`,
            `${t4}`,
            `${t5}`,
            `${t6}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                `${t4}`,
                `${t5}`,
                `${t6}`,
                `${t1}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                `${t5}`,
                `${t6}`,
                `${t1}`,
                `${t2}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                `${t6}`,
                `${t1}`,
                `${t2}`,
                `${t3}`],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106
        }
    ]);
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
