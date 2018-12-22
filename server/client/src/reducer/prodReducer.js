import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_ERROR
} from "../actions/types"

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return action.payload
        case FETCH_PRODUCT_ERROR:
            return action.payload
        default:
            return state

    }
}