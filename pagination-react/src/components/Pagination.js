import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination mb-5">
      {pageNumbers.map((page) => (
        <li key={page} className="page-item">
          <a onClick={() => paginate(page)} href="!#" className="page-link">
            {page}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
