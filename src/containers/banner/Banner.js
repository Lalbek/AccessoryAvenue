import "./Banner.css";
import bannerImg from "../../images/qwer.webp";
import { Button } from "../../components/button/Button";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="box-data">
        <h1 className="title">Make Your Orders</h1>
        <p className="description">
          You can increase the ovary or reduce or pay
        </p>
        <Button
          changeStyle={{ width: "140px", height: "40px" }}
          url="/basket"
          title={"Go to basket"}
        />
      </div>
      <div className="box-img">
        <img className="banner-img" src={bannerImg} />
      </div>
    </div>
  );
};
