import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <div>
      NotFoundPage
      <div>
        <Link to="/main">Return to main</Link>
      </div>
    </div>
  );
};



export default NotFoundPage;
