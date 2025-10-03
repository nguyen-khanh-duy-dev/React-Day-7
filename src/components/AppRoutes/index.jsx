import { HashRouter, Route, Routes } from "react-router"

import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import ProductList from "@/pages/ProductList"
import ProductDetail from "@/pages/ProductDetail"
import NotFound from "@/pages/NotFound"

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
