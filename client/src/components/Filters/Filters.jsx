import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filters.css";
import { getAllSubjects, orderBySubject } from "../../redux/actions";
const Filters = () => {
  const dispatch = useDispatch();
  let allSubjects = useSelector((state) => state.subjects);
  console.log(allSubjects, "Suuubjeeeects");

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  const handleSubject = (e) => {
    e.preventDefault();
    dispatch(orderBySubject(e.target.value));
  };
  const handleDay = (e) => {};
  const handleHour = (e) => {};

  return (
    <div className="filtersContainer">
      <form>
        <select
          name=""
          id=""
          className="filterClass"
          defaultValue="Materia"
          onChange={(e) => handleSubject(e)}
        >
          <option value="Materia" defaultValue>
            Materia
          </option>
          {allSubjects?.map((e) => {
            return (
            <option value={e.subject} key={e.id} >{e.subject}</option>
            )
          })}
        </select>

        <select
          name=""
          id=""
          className="filterClass"
          onChange={(e) => handleDay(e)}
        >
          <option value="" defaultValue>
            Dia de la semana
          </option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
        </select>
        <select
          name=""
          id=""
          className="filterClass"
          onChange={(e) => handleHour(e)}
        >
          <option value="Horario" defaultValue>
            Horario
          </option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
