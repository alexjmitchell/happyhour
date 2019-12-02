import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Like() {
  return (
    <div>
      <p>
        Go back to ALL: <Link to="/">Click Here</Link>
      </p>
    </div>
  );
}

export default Like;
