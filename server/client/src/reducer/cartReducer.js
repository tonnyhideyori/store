import {
    CART
} from "../actions/types"

export default function (state=[], action) {
    switch (action.type) {
        case CART:
            return action.payload;

        default:
            return state;
    }
}