import {
    EDIT_PRODUCT
} from "../actions/types"

export default function (state = {}, action) {
    switch (action.type) {
        case EDIT_PRODUCT:
            return { ...state,
                data: action.payload
            }
        default:
            return state
    }
}