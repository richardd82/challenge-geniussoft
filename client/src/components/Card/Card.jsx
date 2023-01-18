import React from "react";
import "./card.css";
import ava1 from "../../assets/card/avatar1.jpg";
import btnContact from "../../assets/card/btnContact.png";

const Card = () => {
  return (
    <div className="cardContainer">
        <div className="topCard">
      <div className="avatarCard">
        <img src={ava1} alt="" />
      </div>
      <div className="titleCard">
        <div className="nameCard">Marino Blasco</div>
        <div className="profession">Química</div>
      </div>
      </div>
      <div className="commentCard">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor
          neque temporibus, ratione alias eligendi doloribus non cum fuga maxime
          earum dolores fugit corporis incidunt beatae sint quidem vitae
          suscipit!
        </p>
      </div>
      <div className="buttomCard">
        <div className="priceCard">Precio/hora $ 20,00</div>
        <div className="btnContactCard">
          <img src={btnContact} alt="" className="btnGreen" />
        </div>
      </div>
    </div>
  );
};

export default Card;
