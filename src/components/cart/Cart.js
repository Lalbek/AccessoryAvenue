import { Button } from '../button/Button'
import './Cart.css'


export const Cart = ({ product }) => {
    console.log(product)
    return (
        <div className='cart'>
            <a href={'/product/' + product.id}>
            <img className='cart-img' src={product.image} />
            </a>
          
            <h1 className='cart-title'>{product.title.slice(0, 17)}</h1>
<span className='cart-price'>{product.price} $</span>
<p className='cart-description'>{product.description.slice(0, 70)}</p>
 <Button title="ADD TO BASKET" changeStyle={{ width:'100%' }} />
        </div>
    )
}