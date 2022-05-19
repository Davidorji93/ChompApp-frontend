import React from "react";
import { Container } from "semantic-ui-react";
import "./main/menu/Menu.css"

const Pagination = ({ pageSize, totalPages, paginate, currentPage }) => {

  const pageNumbers = [];

  const size = Math.ceil(totalPages / pageSize);
  for (let i = 1; i <= size; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers +" from pagination");

  return (
    <Container textAlign="center">
      <div className="pagination">
        {pageNumbers.map(number => 
          <button
            key={number}
            href="#"
            onClick={() => paginate(number)}
            className={number === currentPage ? "blocks active" : "blocks inactive"} >
            {number}
            {console.log("i got here")}
          </button>
          
        )
        
      }
      
        {console.log(pageNumbers.length + " pagination")}
      </div>
    </Container>
  )
}
export default Pagination;
