// Chứa hàm reducer của product

import { SET_DETAIL, SET_LIST } from "./constants"
const initState = {
    list: [],
    detail: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                list: action.payload,
            }
        case SET_DETAIL:
            return {
                detail: action.payload,
            }
        default:
            return state
    }
}

export default reducer
