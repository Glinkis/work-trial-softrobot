import React from "react";
import Table from "./Table";

const data = [
  {
    name: "Bob",
    age: 26
  },
  {
    name: "Greg",
    age: 28
  }
];

const App = () => (
  <>
    <h1>Example List</h1>
    <Table data={data} />
  </>
);

export default App;
