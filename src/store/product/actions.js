// Hàm chứa các action khi dispatch

// import cac constants
import http from "@/ultis/http"
import { GET_LIST, SET_DETAIL, SET_LIST } from "./constants"

// get products list and dispatch
export const getList = () => {
    return async (dispatch) => {
        dispatch({ type: GET_LIST })

        const response = await http.get("/products")
        dispatch(setList(response.data.items))
    }
}

// get product detail
export const getDetail = (slug) => {
    console.log(slug)

    return async (dispatch) => {
        const response = await http.get(`/products/${slug}`)
        dispatch(setDetail(response.data))
    }
}

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload,
    }
}

export const setDetail = (payload) => {
    return {
        type: SET_DETAIL,
        payload,
    }
}

// Viet nhu này sẽ rõ ràng hơn trong các dự án phức tạp => Dùng cách export này
