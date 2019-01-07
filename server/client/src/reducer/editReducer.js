import {
    EDIT_PRODUCT,
    FETCH_PRODUCT_ERROR
} from "../actions/types"

export default function (state = {}, action) {
    switch (action.type) {
        case EDIT_PRODUCT:
            return { ...state,
                data: action.payload
            }
        case FETCH_PRODUCT_ERROR:
            return { ...state,
                data: action.payload
            }
        default:
            return state
    }
}