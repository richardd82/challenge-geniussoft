import React from "react";
import "./proffs.css";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";

const Proffs = () => {
  return (
    <div className="proffsContainer">
      <div className="proffsTitle">Estos son los proffs disponibles.</div>
      <div className="proffsFilter">
        <Filters />
      </div>
      <div className="proffsContainerCards"></div>
      <div className="proffsCards">
          <Card />
      </div>
    </div>
  );
};

export default Proffs;
