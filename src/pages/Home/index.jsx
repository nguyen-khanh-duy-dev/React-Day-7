import { useNavigate } from "react-router"
import Loading from "@/components/Loading"
import styles from "./Home.module.scss"

function Home() {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate("/products")
    }

    return (
        <div className={styles.container}>
            <button onClick={handleOnClick} className={styles.btn}>
                Go to products
            </button>
        </div>
    )
}

export default Home
