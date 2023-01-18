import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/index";
import "./proffs.css";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Proffs = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const users = allUsers;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const allCards = allUsers.slice(indexFirstCard, indexLastCard);
  const pager = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(users);

  return (
    <div className="proffsContainer">
      <div className="proffsTitle">Estos son los proffs disponibles.</div>
      <div className="proffsFilter">
        <Filters />
      </div>
      <div className="proffsContainerCards">
        {allCards?.map((post) => (
          <div className="proffsCards" key={post.id}>
            <Card post={post} />
          </div>
        ))}
      </div>
      <div className="paginationMain">
          <Pagination 
            cardsPerPage={cardsPerPage}
            allCards={allUsers.length}
            pager={pager}
          />
      </div>
    </div>
  );
};

export default Proffs;
