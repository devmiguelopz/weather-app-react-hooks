import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <div>
      WelcomePage
      <div>
        <Link to="/main">Go to main</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
