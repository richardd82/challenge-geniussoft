import React from "react";
import "./landing.css";
import conn285 from "../../assets/landing/285-Conn .png";
import btnAulas from "../../assets/landing/btnAulas.png";
import btnEstudiar from "../../assets/landing/btnEstudiar.png";
import ilustra from "../../assets/landing/Ilustra.png";
import proffy from "../../assets/landing/Proffy.png";
import txtLanding from "../../assets/landing/textLanding.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="upLanding">
        <div className="secc1">
          <img src={proffy} alt="" />
          <img src={txtLanding} alt="" />
        </div>
        <div className="secc2">
          <img src={ilustra} alt="" />
        </div>
      </div>
      <div className="buttomLanding">
        <div className="secc3">
          <Link to='/proffs'>
            <img src={btnEstudiar} alt="" />
          </Link>
          <Link to='/register'>
          <img className="btnAulas" src={btnAulas} alt="" />
          </Link>
        </div>
        <div className="secc4">
          <img src={conn285} alt="" />
          💙
        </div>
      </div>
    </div>
  );
};

export default Landing;
