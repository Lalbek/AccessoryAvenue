
import { Link } from "react-router-dom"
import "./Button.css"


export const Button = ({title, url, changeStyle, functionClick}) =>{
    return (
    <Link onClick={functionClick? functionClick : ''}
     style={changeStyle} className="btn " to={url ? url : ''}>
        {title}
    </Link>)
}