import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { BsCartPlus } from "react-icons/bs"

import { hooks as loadingHooks } from "@/store/ui"
import styles from "./ProductDetail.module.scss"
import {
    actions as productDetailActions,
    hooks as productDetailHooks,
} from "@/store/product"
import { useEffect } from "react"
import Loading from "@/components/Loading"

function ProductDetail() {
    const navigate = useNavigate()
    const slugParam = useParams()
    const isLoading = loadingHooks.useLoading()

    const dispatch = useDispatch()
    const productDetail = productDetailHooks.useProductDetail()

    useEffect(() => {
        dispatch(productDetailActions.getDetail(slugParam.slug))
    }, [slugParam.slug, dispatch])

    if (isLoading) {
        return <Loading />
    }

    if (!productDetail) return

    return (
        <>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className={styles.btn_back}
            >
                Back
            </button>
            <div className={styles.container}>
                <div className={styles.product_image}>
                    <img src={productDetail.thumbnail} />
                </div>
                <div className={styles.product_info}>
                    <div className={styles.title}>{productDetail.title}</div>

                    <div className={styles.product_rating}>
                        <span className={styles.rating}>
                            {productDetail.rating}
                        </span>
                        <div className={styles.rating_stars}>
                            ★★★★★
                            <div
                                className={styles.rating_filled}
                                style={{
                                    width: `${
                                        (productDetail.rating / 5) * 100
                                    }%`,
                                }}
                            >
                                ★★★★★
                            </div>
                        </div>
                        <span className={styles.line}>|</span>
                        <span className={styles.stock}>
                            In Stock: {productDetail.stock}
                        </span>
                    </div>
                    <div className={styles.product_meta}>
                        <span>{productDetail.brand}</span>
                        <span>•</span>
                        <span>{productDetail.category}</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.price_discounted}>
                            $
                            {(
                                (1 - productDetail.discountPercentage / 100) *
                                productDetail.price
                            ).toFixed(2)}
                        </span>
                        <span className={styles.price_origin}>
                            ${productDetail.price}
                        </span>
                    </div>
                    <div className={styles.description}>
                        {productDetail.description}
                    </div>

                    <div className={styles.quantity}></div>

                    <div className={styles.btns}>
                        <button className={styles.addToCard_btn}>
                            <BsCartPlus />
                            <span>Add to cart</span>
                        </button>
                        <button className={styles.buy_btn}>Buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
