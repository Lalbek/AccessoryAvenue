import { useEffect } from "react"
import { useParams } from "react-router-dom"

export function Product() {
    const params = useParams()
  
useEffect(() =>{
    getProduct()
})
    const getProduct = async() => {
        const res = await fetch('https://fakestoreapi.com/products/1'+params.id)
        const data = await res.json()
         console.log(data)
    }
    return(
        <div>
            <h1>Hello product</h1>
        </div>
    )
}