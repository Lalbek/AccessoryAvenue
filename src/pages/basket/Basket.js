import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Basket.css";
import { Button } from "../../components/button/Button";

export function Basket() {
  const { valueBasket, setValueBasket } = useContext(Context);
  const deleteBasket = (index) => {
    valueBasket?.splice(index, 1);
    setValueBasket([...valueBasket]);
  };
  return (
    <div className="basket">
      {valueBasket[0] ? (
        valueBasket?.map((product, index) => (
          <div className="box-basket" key={product.id}>
            <img className="basket-img" src={product.image} />
            <h1 className="basket-title">{product.title.slice(0, 20)}</h1>
            <Button title="delete" functionClick={() => deleteBasket(index)} />
          </div>
        ))
      ) : (
        <h1 className="basket-title-not-found">No product in basket...</h1>
      )}
    </div>
  );
}
