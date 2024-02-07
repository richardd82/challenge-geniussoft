import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSchedules,
  getAllSubjects,
  getAllUsers,
  getAllDays,
} from "../../redux/actions/index";
import "./proffs.css";
// import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";

const Proffs = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const allSubjects = useSelector((state) => state.subjects);
  const allSchedules = useSelector((state) => state.schedules);
  const allDays = useSelector((state) => state.days);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllSubjects());
    dispatch(getAllSchedules());
    dispatch(getAllDays());
  }, [dispatch]);
  // console.log(allDays, "!Prrrooooffffssss!");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const allCards = allUsers.slice(indexFirstCard, indexLastCard);
  const pager = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log(allUsers.slice(indexFirstCard, indexLastCard));

  return (
    <div className="proffsContainer">
      <div className="proffsTitle">Estos son los proffs disponibles.</div>
      <div className="proffsFilter">
        <div className="filtersContainer" >
          <Filters
            allSubjects={allSubjects}
            allSchedules={allSchedules}
            allDays={allDays}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="proffsContainerCards">
        {allCards &&
          allCards?.map((post) => (
            <div className="proffsCards" key={post?.id} >
              <Card post={post} />
            </div>
          ))}
      </div>
      <div className="paginationMain">
        <Pagination
          cardsPerPage={cardsPerPage}
          allCards={allUsers.length}
          pager={pager}
          key={currentPage}
        />
      </div>
    </div>
  );
};

export default Proffs;
