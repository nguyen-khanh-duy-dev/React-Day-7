// Hàm chứa các action khi dispatch

import { actions as loadingAction } from "@/store/ui"

// import cac constants
import http from "@/ultis/http"
import { GET_LIST, SET_DETAIL, SET_LIST } from "./constants"

// get products list and dispatch
export const getList = () => {
    return async (dispatch) => {
        dispatch(loadingAction.showLoading())
        dispatch({ type: GET_LIST })

        try {
            const response = await http.get("/products")
            dispatch(setList(response.data.items))
        } catch (error) {
            console.error("Error fetching products:", error)
        } finally {
            dispatch(loadingAction.hideLoading())
        }
    }
}

// get product detail
export const getDetail = (slug) => {
    return async (dispatch) => {
        dispatch(loadingAction.showLoading())

        try {
            const response = await http.get(`/products/${slug}`)
            dispatch(setDetail(response.data))
        } catch (error) {
            console.error("Error fetching product detail:", error)
            // Xử lý lỗi (hiển thị toast, redirect, etc.)
        } finally {
            dispatch(loadingAction.hideLoading())
        }
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
