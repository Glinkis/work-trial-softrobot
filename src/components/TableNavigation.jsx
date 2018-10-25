// @ts-check
import React from "react";
import "./TableNavigation.scss";

const TableNavigation = ({ page, rows, onSetPage, onSetRows, pages }) => (
  <div className="table-navigation">
    <i className="material-icons" onClick={() => onSetPage(page - 1)}>
      arrow_back
    </i>

    <span>{`Page ${page + 1} / ${pages + 1}`}</span>

    <span>
      <label htmlFor="rows">Rows:</label>
      <input id="rows" type="number" value={rows} onChange={onSetRows} />
    </span>

    <i className="material-icons" onClick={() => onSetPage(page + 1)}>
      arrow_forward
    </i>
  </div>
);

export default TableNavigation;
