import React from "react";
import { HashLink } from "react-router-hash-link";
import "./pagination.css";

const Pagination = ({ cardsPerPage, allCards, pager }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginationContainer">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <HashLink smooth to="#root" className="linkToUp">
            {/* <a href="#root" id="#linkPag"> */}
              <li className="number" key={number}>
                <label className="labelNumber" onClick={() => pager(number)}>
                  {number}
                </label>
              </li>
            {/* </a> */}
            </HashLink>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
