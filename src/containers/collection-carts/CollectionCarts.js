import { useEffect, useState } from 'react'
import './CollectionCarts.css'
import { Cart } from '../../components/cart/Cart'

export const CollectionCarts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }

    return(
    <div className= 'collection'>
        {products.map((item) => <Cart key={item.id} product={item}/> )}
    </div>
    )
}