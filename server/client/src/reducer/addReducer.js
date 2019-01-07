import {
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT
} from "../actions/types"

export default function (state={}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state,prodAdd:action.payload}
        case ADD_PRODUCT_ERROR:
            return {...state,prodAddError:action.payload}
        default:
        return state
    }

}