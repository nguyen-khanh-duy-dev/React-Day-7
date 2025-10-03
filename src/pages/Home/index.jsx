import { useDispatch } from "react-redux"

import { hooks as loadingHook, actions as loadingAction } from "@/store/ui"
import { useNavigate } from "react-router"
import Loading from "@/components/Loading"
import styles from "./Home.module.scss"

function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = loadingHook.useLoading()
    console.log(isLoading)

    const handleOnClick = () => {
        dispatch(loadingAction.showLoading())

        setTimeout(() => {
            navigate("/products")
            dispatch(loadingAction.hideLoading())
        }, 2000)
    }

    return (
        <div className={styles.container}>
            <button onClick={handleOnClick} className={styles.btn}>
                Go to products
            </button>
            {isLoading ? <Loading /> : ""}
        </div>
    )
}

export default Home
