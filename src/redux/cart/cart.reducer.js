import { TOGGLE_CART_HIDDEN } from './cart.types';

const initialState = {
    hidden: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer;