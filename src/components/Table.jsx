import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Age",
    accessor: "age"
  }
];

const Table = ({ data }) => {
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
