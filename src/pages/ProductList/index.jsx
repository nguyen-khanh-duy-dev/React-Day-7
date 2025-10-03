import { useEffect } from "react"
import { useDispatch } from "react-redux"

import styles from "./ProductList.module.scss"
import {
    actions as productActions,
    hooks as productHooks,
} from "@/store/product"
import ProductCard from "@/components/ProductCard"
import Loading from "@/components/Loading"

function ProductList() {
    const dispatch = useDispatch()
    const products = productHooks.useProduct()

    useEffect(() => {
        dispatch(productActions.getList())
    }, [dispatch])

    if (!products) return
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <div className={styles.productCard} key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}

        </div>
    )
}

export default ProductList
