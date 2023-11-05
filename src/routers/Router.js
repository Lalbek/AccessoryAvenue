import { Route, Routes } from "react-router-dom"
import { Basket } from '../pages/basket/Basket'

import { Product } from "../pages/product/Product"

import { Home } from "../pages/home/Home"

export function Router() {
    return(
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/product/:id" element={<Product />} />
</Routes>
    )
}
