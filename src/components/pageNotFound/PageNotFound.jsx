import React from "react";
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/">Back to home</a>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
