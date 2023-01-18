import React from "react";
import "./filters.css";
const Filters = () => {
  return (
    <div className="filtersContainer">
      <form>
        <select name="" id="" className="filterClass" defaultValue="Materia">
          <option value="Materia" defaultValue>Materia</option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
        </select>
        <select name="" id="" className="filterClass">
          <option value="" defaultValue>Dia de la semana</option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
        </select>
        <select name="" id="" className="filterClass">
          <option value="Horario" defaultValue>Horario</option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
