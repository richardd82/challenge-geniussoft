import React from "react";
import "./card.css";
import btnContact from "../../assets/card/btnContact.png";

const Card = ({post}) => {
  // console.log(post.name)
  return (
    <>
        <div className="topCard" key={post.id}>
      <div className="avatarCard">
        <img src={post.photo} alt="" />
      </div>
      <div className="titleCard">
        <div className="nameCard">{post.name}</div>
        <div className="profession"> {post.subject.subject} </div>
      </div>
      </div>
      <div className="commentCard">
        <p> {post.comment} </p>
        
      </div>
      <div className="buttomCard">
        <div className="priceCard">Precio/hora $ {post.price.price}</div>
        <div className="btnContactCard">
          <img src={btnContact} alt="" className="btnGreen" />
        </div>
      </div>
    </>
  );
};

export default Card;
