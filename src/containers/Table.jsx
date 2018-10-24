import React from "react";
import "react-toggle/style.css";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import { sortTable } from "../actions/sortActions";
import { sortByString, sortByBoolean } from "../utils/sort";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import "./Table.scss";

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
    const { users } = this.props.request;
    const { name } = this.props.sort;
    let pos = 0;
    switch (name) {
      case "Text":
        pos = sortByString(a.text, b.text);
        break;
      case "Date":
        pos = sortByString(a.date, b.date);
        break;
      case "Owner":
        pos = sortByString(users[a.userId], users[b.userId]);
        break;
      case "Status":
        pos = sortByBoolean(a.active, b.active);
        break;
    }

    const sortById = a.id < b.id ? -1 : a.id > b.id ? 1 : 0;

    return pos === 0 ? sortById : pos;
  };

  render() {
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;
    const { direction } = this.props.sort;

    items = items.sort(this.sort);
    if (direction === "down") {
      items = items.reverse();
    }

    return (
      <div className="table">
        {<TableHeader onClick={this.onSort} sorter={this.props.sort} />}
        {items.map(item => (
          <TableRow
            key={item.id}
            users={users}
            item={item}
            onUpdate={this.updateItem}
            isUpdating={updating.includes(item.id)}
            failedToUpdate={failed.includes(item.id)}
          />
        ))}
      </div>
    );
  }
}
