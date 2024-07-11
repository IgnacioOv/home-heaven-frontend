//Crear el reductor(reducer)

//El reductor es una función que determina CÓMO cambiara el estado en respuesta a una acción

import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_ITEM } from '../actions/cartActions';

const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.cartItems.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.productId === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
            };
        case INCREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.productId === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case DECREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.productId === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productId !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;