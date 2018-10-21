import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./Table.scss";

const columns = [
  { Header: "Text", accessor: "text" },
  { Header: "Date", accessor: "date" },
  { Header: "Owner", accessor: "owner" },
  {
    Header: "Status",
    accessor: "status",
    Cell: text => <span className={`status ${text ? "enabled" : ""}`} />
  }
];

const Table = ({ data }) => (
  <ReactTable data={data} columns={columns} minRows={0} />
);

export default Table;
