import { useEffect, useState } from "react"
import './Product.css'
import { useParams } from "react-router-dom"
import { Button } from "../../components/button/Button"

export function Product() {
    const params = useParams()
    const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
})
    const getProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products/' + params.id)
        const data = await res.json()
         setProduct(data)
         console.log(data)
    }
    return (
        <>
        {product?.title ?<div className="product">
           <div className="box-product-img">
             <img className="product-img" src={product.image} />
             </div>
             <div className="product-data">
                <h1 className="product-title">{product.title}</h1>
                <span className="product-price">{product.price}$</span>
                <p className="product-description">{product.description}</p>
                <Button title="ADD TO BASKET" changeStyle={{ width:'100%' }} />
             </div>
        </div>: <h1 className="product-title-not-found">not found</h1>}
        </>
    )
}