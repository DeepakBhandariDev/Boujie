import React from 'react'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ALL_PRODUCTS_TO_CART = 'ADD_ALL_PRODUCTS_TO_CART'


import { combineReducers } from 'redux'

export const createRootReducer = () =>
  combineReducers({
    products,
    cart
  })

export function reducer(store, action) {
    return (
        <div>
            
        </div>
    )
}
