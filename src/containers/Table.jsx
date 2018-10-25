import React from "react";
import "react-toggle/style.css";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import { sortTable, setTablePage, setTableRow } from "../actions/tableActions";
import { sortByString, sortByBoolean, sortByNumber } from "../utils/sort";
import TableHeader, { columns } from "../components/TableHeader";
import TableRow from "../components/TableRow";
import "./Table.scss";
import TableNavigation from "../components/TableNavigation";

@connect(state => state)
export default class Table extends React.Component {
  updateItem = item => {
    const { dispatch } = this.props;
    dispatch(updateItem(item));
  };

  onSort = event => {
    const { dispatch } = this.props;
    const name = event.target.textContent;
    dispatch(sortTable(name));
  };

  sort = (a, b) => {
    const { TEXT, DATE, OWNER, STATUS } = columns;
    const { users } = this.props.request;
    const { name } = this.props.table;
    let pos = 0;
    switch (name) {
      case TEXT:
        pos = sortByString(a.text, b.text);
        break;
      case DATE:
        pos = sortByString(a.date, b.date);
        break;
      case OWNER:
        pos = sortByString(users[a.userId], users[b.userId]);
        break;
      case STATUS:
        pos = sortByBoolean(a.active, b.active);
        break;
    }

    return pos === 0 ? sortByNumber(a.id, b.id) : pos;
  };

  onSetPage = page => {
    const { dispatch } = this.props;
    const { items } = this.props.request;
    const { rows } = this.props.table;
    const max = Math.floor(items.length / rows);
    if (page > max) {
      page = max;
    }
    dispatch(setTablePage(page));
  };

  onSetRows = ({ target }) => {
    const { dispatch } = this.props;
    const rows = target.value;
    dispatch(setTableRow(rows));
  };

  render() {
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;
    const { direction, rows, page } = this.props.table;

    let sorted = items.sort(this.sort);
    if (direction === "down") {
      sorted = items.reverse();
    }

    sorted = items.slice(page * rows, page * rows + rows);

    return (
      <div className="table">
        <TableHeader onClick={this.onSort} table={this.props.table} />
        {sorted.map(item => (
          <TableRow
            key={item.id}
            users={users}
            item={item}
            onUpdate={this.updateItem}
            isUpdating={updating.includes(item.id)}
            failedToUpdate={failed.includes(item.id)}
          />
        ))}
        <TableNavigation
          page={page}
          rows={rows}
          onSetPage={this.onSetPage}
          onSetRows={this.onSetRows}
          pages={Math.floor(items.length / rows)}
        />
      </div>
    );
  }
}
