import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import "./index.scss";

const App = () => (
  <>
    <h1>Example List</h1>
    <Table />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
