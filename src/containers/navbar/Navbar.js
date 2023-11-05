
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return(
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/basket">Basket</Link>
          
        </div>
    )
}