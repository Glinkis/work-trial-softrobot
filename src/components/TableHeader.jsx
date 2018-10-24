import React from "react";
import "./TableHeader.scss";

const TableHeader = () => (
  <div className="table-header">
    <span className="sorter">Text</span>
    <span className="sorter">Date</span>
    <span className="sorter">Owner</span>
    <span className="sorter">Status</span>
    <span />
  </div>
);

export default TableHeader;
