import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  { Header: "Text", accessor: "text" },
  { Header: "Date", accessor: "date" }
  { Header: "Owner", accessor: "owner" }
  { Header: "Status", accessor: "status" }
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
