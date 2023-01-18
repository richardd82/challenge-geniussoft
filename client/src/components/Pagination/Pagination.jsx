import React from 'react'
import './pagination.css'

const Pagination = ({cardsPerPage, allCards, pager}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allCards/cardsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div className='paginationContainer'>
         <ul>
                { pageNumbers &&
                pageNumbers.map(number => (
                    <li className='number' key={number}>
                        <label className='labelNumber' onClick={() => pager(number)}>{number}</label>
                    </li>
                ))
                }
            </ul>
    </div>
  )
}

export default Pagination