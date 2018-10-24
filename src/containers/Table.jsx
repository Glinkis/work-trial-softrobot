import React from "react";
import "react-toggle/style.css";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import TableRow from "../components/TableRow";
import "./Table.scss";

const TableHeader = () => (
  <div className="table-header">
    <span>Text</span>
    <span>Date</span>
    <span>Owner</span>
    <span>Status</span>
    <span />
  </div>
);

@connect(state => state)
export default class Table extends React.Component {
  updateItem = item => {
    const { dispatch } = this.props;
    dispatch(updateItem(item));
  };
  render() {
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;
    return (
      <div className="table">
        {<TableHeader />}
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
