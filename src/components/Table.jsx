import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

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

const columns = [
  {
    Header: "Name",
    accessor: "name" // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: props => <span className="number">{props.value}</span> // Custom cell components!
  }
];

const Table = () => {
  return (
    <ReactTable
      data={data}
      columns={columns}
      minRows={0}
      showPagination={false}
    />
  );
};

export default Table;
