import { createStore, applyMiddleware, compose } from 'redux'
import products from '../products'
import {createRootReducer} from './reducer'

export default function makeStore( products ){
    
    let composeEnhancers = compose
  
    if (process.env.NODE_ENV === 'development') {
      if ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      }
    }
  
    const store = createStore(
      createRootReducer(),
      products,
      composeEnhancers(applyMiddleware(...middlewares))
    )
  
  
    if ((module).hot) {
      ;(module).hot.accept('./reducer', () => {
        const nextReducer = require('./reducer').default
        store.replaceReducer(nextReducer)
      })
    }


   return store
}
