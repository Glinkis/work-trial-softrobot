// @ts-check
import React from "react";
import "./TableHeader.scss";

export const columns = {
  TEXT: "Text",
  DATE: "Date",
  OWNER: "Owner",
  STATUS: "Status"
};

const TableHeader = ({ onClick, sorter }) => {
  const { TEXT, DATE, OWNER, STATUS } = columns;
  const activeSort = name => (sorter.name === name ? sorter.direction : "");
  return (
    <div className="table-header">
      <span className={`sorter ${activeSort(TEXT)}`} onClick={onClick}>
        {TEXT}
      </span>
      <span className={`sorter ${activeSort(DATE)}`} onClick={onClick}>
        {DATE}
      </span>
      <span className={`sorter ${activeSort(OWNER)}`} onClick={onClick}>
        {OWNER}
      </span>
      <span className={`sorter ${activeSort(STATUS)}`} onClick={onClick}>
        {STATUS}
      </span>
      <span />
    </div>
  );
};

export default TableHeader;
