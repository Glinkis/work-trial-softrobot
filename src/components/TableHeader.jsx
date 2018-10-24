import React from "react";
import "./TableHeader.scss";

const TableHeader = ({ sorter, onClick }) => {
  const activeSort = name => (sorter.name === name ? sorter.direction : "");
  return (
    <div className="table-header">
      <span className={`sorter ${activeSort("Text")}`} onClick={onClick}>
        Text
      </span>
      <span className={`sorter ${activeSort("Date")}`} onClick={onClick}>
        Date
      </span>
      <span className={`sorter ${activeSort("Owner")}`} onClick={onClick}>
        Owner
      </span>
      <span className={`sorter ${activeSort("Status")}`} onClick={onClick}>
        Status
      </span>
      <span />
    </div>
  );
};

export default TableHeader;
