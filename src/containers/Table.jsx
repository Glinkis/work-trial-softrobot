import React from "react";
import { connect } from "react-redux";
import "react-toggle/style.css";
import { updateItem } from "../actions/itemActions";
import { setTablePage, setTableRows, sortTable } from "../actions/tableActions";
import TableHeader, { columns } from "../components/TableHeader";
import TableNavigation from "../components/TableNavigation";
import TableRow from "../components/TableRow";
import { sortByBoolean, sortByNumber, sortByString } from "../utils/sort";
import AddItem from "./AddItem";
import "./Table.scss";

@connect(state => state)
export default class Table extends React.Component {
  updateItem = item => {
    this.props.dispatch(updateItem(item));
  };

  onSort = event => {
    const name = event.target.textContent;
    this.props.dispatch(sortTable(name));
  };

  sort = (a, b) => {
    const { users } = this.props.request;

    let pos = 0;
    switch (this.props.table.name) {
      case columns.TEXT:
        pos = sortByString(a.text, b.text);
        break;
      case columns.DATE:
        pos = sortByString(a.date, b.date);
        break;
      case columns.OWNER:
        pos = sortByString(users[a.userId], users[b.userId]);
        break;
      case columns.STATUS:
        pos = sortByBoolean(a.active, b.active);
        break;
    }

    return pos === 0 ? sortByNumber(a.id, b.id) : pos;
  };

  onSetPage = page => {
    const { dispatch, request, table } = this.props;
    const max = Math.ceil(request.items.length / table.rows) - 1;
    if (page > max) {
      page = max;
    }
    dispatch(setTablePage(page));
  };

  onSetRows = ({ target }) => {
    const rows = Number(target.value);
    this.props.dispatch(setTableRows(rows));
  };

  render() {
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;
    const { direction, rows, page } = this.props.table;

    let sorted = items.sort(this.sort);
    if (direction === "down") {
      sorted = items.reverse();
    }

    // Get items for current page.
    sorted = items.slice(page * rows, page * rows + rows);

    return (
      <div className="table">
        <TableHeader onClick={this.onSort} table={this.props.table} />
        {sorted.map(item => (
          <TableRow
            key={item.id}
            users={users}
            item={item}
            onSubmit={this.updateItem}
            isUpdating={updating.includes(item.id)}
            failedToUpdate={failed.includes(item.id)}
          />
        ))}
        <TableNavigation
          page={page}
          rows={rows}
          onSetPage={this.onSetPage}
          onSetRows={this.onSetRows}
          pages={Math.ceil(items.length / rows) - 1}
        />
        <AddItem />
      </div>
    );
  }
}
