// @ts-check
import React from "react";
import "./TableHeader.scss";

export const columns = {
  TEXT: "Text",
  DATE: "Date",
  OWNER: "Owner",
  STATUS: "Status"
};

const TableHeader = ({ onClick, table }) => {
  const activeSort = name => (table.name === name ? table.direction : "");

  const Cell = ({ column }) => (
    <span className={`sorter ${activeSort(column)}`} onClick={onClick}>
      {column}
    </span>
  );

  return (
    <div className="table-header">
      <Cell column={columns.TEXT} />
      <Cell column={columns.DATE} />
      <Cell column={columns.OWNER} />
      <Cell column={columns.STATUS} />
      <span />
    </div>
  );
};

export default TableHeader;
