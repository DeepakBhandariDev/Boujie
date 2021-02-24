
//ACTIONS
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ALL_PRODUCTS_TO_CART = 'ADD_ALL_PRODUCTS_TO_CART'


//ACTION CREATOR
export function addProducts(product){
    return{
        type: ADD_PRODUCT,
        payload:{ product }
    }
}

export function addAllProducts(products){
    return{
        type: ADD_ALL_PRODUCTS,
        payload: { products }
    }
}

export function addToCart(product){
    return{
        type: ADD_TO_CART,
        payload:{ product }
    }
}

export function removeFromCart( _id ){
    return{
        type: REMOVE_FROM_CART,
        payload: {_id}
    }
}

export function addAllProductsToCart(products){
    return{
        type: ADD_ALL_PRODUCTS_TO_CART,
        payload:{products}
    }
}

// Async action processed by redux-thunk middleware
export function getAllProducts(products) {
  return async (dispatch) => {
    try{
      const data = products.json()
      dispatch(addAllProducts(data))
    } catch (error) {
      console.log(error)
    }
  }
}