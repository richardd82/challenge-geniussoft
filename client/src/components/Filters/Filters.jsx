import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./filters.css";
import { getAllSchedules, getAllSubjects, getAllDays, orderBySubject, orderByHour, orderByDay } from "../../redux/actions";
const Filters = ({allSubjects, allSchedules, allDays, setCurrentPage}) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    subjects: "Materia",
    schedule: "Dia",
    hour: "Horario"
  });
  // console.log(getAllDays, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");

  useEffect(() => {
    dispatch(getAllSubjects());
    dispatch(getAllSchedules());
    dispatch(getAllDays());
  }, [dispatch]);

  const handleSubject = (e) => {
    // console.log(e.subject)
    e.preventDefault();
    setFilter({
      schedule:"Dia", hour:"Horario",
      subjects: e.target.value
    })    
    setCurrentPage(1)   
    return dispatch(orderBySubject(e.target.value));
  };
  const handleDay = (e) => {
    e.preventDefault();
    setFilter({
      subjects:"Materia", hour:"Horario",
      schedule: e.target.value
    })
    setCurrentPage(1)    
    return dispatch(orderByDay(e.target.value));
  };
  const handleHour = (e) => {
    e.preventDefault();
    setFilter({
      subjects:"Materia", schedule:"Dia",
      hour: e.target.value
    })    
    setCurrentPage(1)   
    return dispatch(orderByHour(e.target.value));

  };

  return (
    <div className="filtersContainer">
      <form>
        <select
          name=""
          id=""
          value={filter.subjects}
          className="filterClass"
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
          value={filter.schedule}
          className="filterClass"
          onChange={(e) => handleDay(e)}
        >
          <option value="" defaultValue>
            Dia de la semana
          </option>
          {allDays?.map((e) => {
            
            return (
            <option value={e.day} key={e.id} >{e.day}</option>
            )
          })}
        </select>
        <select
          name=""
          id=""
          value={filter.hour}
          className="filterClass"
          onChange={(e) => handleHour(e)}
        >
          <option value="Horario" defaultValue>
            Horario
          </option>
          {allSchedules?.map((e) => {
            
            return (
            <option value={`${e.from}`} key={e.id} >{e.from}-{e.still}</option>
            )
          })}
        </select>
      </form>
    </div>
  );
};

export default Filters;
