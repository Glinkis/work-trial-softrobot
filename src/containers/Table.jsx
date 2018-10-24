import React from "react";
import "react-toggle/style.css";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import { sortByString, sortByBoolean } from "../utils/sort";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import "./Table.scss";

@connect(state => state)
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: this.defaultSort, sorter: {} };
  }

  updateItem = item => {
    const { dispatch } = this.props;
    dispatch(updateItem(item));
  };

  onSort = event => {
    const { users } = this.props.request;
    let name = event.target.textContent;
    let sort = this.defaultSort;
    let sorter = {};

    switch (name) {
      case "Text":
        sort = (a, b) => sortByString(a.text, b.text);
        sorter = { name: "Text" };
        break;
      case "Date":
        sort = (a, b) => sortByString(a.date, b.date);
        sorter = { name: "Date" };
        break;
      case "Owner":
        sort = (a, b) => sortByString(users[a.userId], users[b.userId]);
        sorter = { name: "Owner" };
        break;
      case "Status":
        sort = (a, b) => sortByBoolean(a.active, b.active);
        sorter = { name: "Status" };
        break;
    }

    if (
      this.state.sorter.name === name &&
      this.state.sorter.direction === "up"
    ) {
      sorter.direction = "down";
    } else if (
      this.state.sorter.name === name &&
      this.state.sorter.direction === "down"
    ) {
      sorter = {};
      sort = this.defaultSort;
    } else {
      sorter.direction = "up";
    }

    this.setState({ sort, sorter });
  };

  defaultSort(a, b) {
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  }

  render() {
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;

    items = items.sort(this.state.sort);
    if (this.state.sorter.direction === "down") {
      items = items.reverse();
    }

    return (
      <div className="table">
        {<TableHeader onClick={this.onSort} sorter={this.state.sorter} />}
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
