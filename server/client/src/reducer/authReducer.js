import {
    AUTH_USER,
    AUTH_ERROR
} from "../actions/types"

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return  action.payload
        case AUTH_ERROR:
            return action.payload
        default:
            return state
    }
}
