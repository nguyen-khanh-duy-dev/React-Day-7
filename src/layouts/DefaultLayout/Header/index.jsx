import { IoSearch } from "react-icons/io5"
import { FaRegUserCircle } from "react-icons/fa"

import { actions as loadingAction } from "@/store/ui"
import styles from "./Header.module.scss"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBackHome = () => {
        navigate("/")
        dispatch(loadingAction.hideLoading())
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.heading} onClick={handleBackHome}>
                Redux
            </h2>
            <label className={styles.search_input}>
                <input
                    placeholder="Search ..."
                    name="search"
                    className="search"
                />
                <button className={styles.icon_btn}>
                    <IoSearch />
                </button>
            </label>

            <div className={styles.user_action}>
                <div className={styles.user}>
                    <FaRegUserCircle />
                </div>
            </div>
        </div>
    )
}

export default Header
