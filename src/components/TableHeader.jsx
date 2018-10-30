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
  const { TEXT, DATE, OWNER, STATUS } = columns;
  const activeSort = name => (table.name === name ? table.direction : "");

  const Cell = ({ column }) => (
    <span className={`sorter ${activeSort(column)}`} onClick={onClick}>
      {column}
    </span>
  );

  return (
    <div className="table-header">
      <Cell column={TEXT} />
      <Cell column={DATE} />
      <Cell column={OWNER} />
      <Cell column={STATUS} />
      <span />
    </div>
  );
};

export default TableHeader;
