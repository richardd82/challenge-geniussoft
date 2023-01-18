import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/index";
import "./proffs.css";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";

const Proffs = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const users = allUsers;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <div className="proffsContainer">
      <div className="proffsTitle">Estos son los proffs disponibles.</div>
      <div className="proffsFilter">
        <Filters />
      </div>
      <div className="proffsContainerCards">
        {users?.map((post) => (
          <div className="proffsCards" key={post.id}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proffs;
