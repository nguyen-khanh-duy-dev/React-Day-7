import PropTypes from "prop-types"
import { CiStar } from "react-icons/ci"
import { Link } from "react-router"
import { useState } from "react"

import styles from "./ProductCard.module.scss"

function ProductCard({ product = {} }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={styles.container}>
            <Link
                to={`/products/${product.slug}`}
                className={styles.linkOverlay}
            ></Link>

            {/* Skeleton cho ảnh */}
            {!loaded && <div className={styles.skeletonThumb}></div>}

            <img
                src={product.thumbnail}
                alt={product.title}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? "block" : "none" }}
            />

            <div className={styles.productInfo}>
                <div className={styles.headerCard}>
                    <h3 className={styles.title}>{product.title}</h3>
                </div>
                <div className={styles.subInfo}>
                    <span className={styles.brand}>{product.brand}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.category}>{product.category}</span>
                </div>
                <div className={styles.priceProduct}>
                    <span className={styles.priceDiscount}>
                        $
                        {(
                            (1 - product.discountPercentage / 100) *
                            product.price
                        ).toFixed(2)}
                    </span>
                    <span className={styles.price}>${product.price}</span>
                </div>

                <div className={styles.footerCard}>
                    <div className={styles.rating}>
                        <CiStar />
                        {product.rating}
                    </div>
                    <button className={styles.btn}>Add to cart</button>
                </div>
            </div>

            <span className={styles.discount}>
                -{product.discountPercentage}%
            </span>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard
