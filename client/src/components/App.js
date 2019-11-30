import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "../components/Main";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main}></Route>
      </div>
    </Router>
  );
}

export default App;
