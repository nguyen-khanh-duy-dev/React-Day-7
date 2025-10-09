// File custom hook để custom phần lấy dữ liệu từ useSelector

import { useSelector } from "react-redux"
import { getDetail, getList } from "./selectors"

export const useProducts = () => {
    const products = useSelector(getList)
    return products
}

export const useProductDetail = () => {
    const productDetail = useSelector(getDetail)
    return productDetail
}
