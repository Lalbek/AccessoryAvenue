import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export const Navbar = () => {
  const { valueBasket, setValueBasket } = useContext(Context);
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/basket">
        Basket <span className="basket-total">{valueBasket?.length}</span>
      </Link>
    </div>
  );
};
