//Crear acciones
//Las acciones son objetos que describen el tipo de cambio que deseas hacer en el 
// estado de la aplicación

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';


export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});


export const incrementQuantity = (id) => ({
    type: INCREMENT_QUANTITY,
    payload: id
});

export const decrementQuantity = (id) => ({
    type: DECREMENT_QUANTITY,
    payload: id
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});