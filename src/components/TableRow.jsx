// @ts-check
import React from "react";
import "./TableRow.scss";
import TableRowEditable from "./TableRowEditable";

export default class TableRow extends React.Component {
  state = { isEditing: false };

  onSubmit = item => {
    this.props.onSubmit(item);
    this.onEditDisable();
  };

  onEditEnable = () => {
    this.setState({ isEditing: true });
  };

  onEditDisable = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { isEditing } = this.state;
    const { users, item, isUpdating, failedToUpdate } = this.props;
    const { text, date, userId, active } = this.props.item;

    if (isEditing || isUpdating || failedToUpdate) {
      return (
        <TableRowEditable
          users={users}
          item={item}
          onSubmit={this.onSubmit}
          onCancel={this.onEditDisable}
          isUpdating={isUpdating}
          failedToUpdate={failedToUpdate}
          updateMessage="Updating item..."
          errorMessage="Failed to update item."
        />
      );
    }

    return (
      <div className="table-row">
        <span>{`${text.slice(0, 12)}...`}</span>
        <span>{date.slice(0, 10)}</span>
        <span>{users[userId]}</span>
        <span className="status">
          <span className={active ? "enabled" : ""} />
        </span>
        <span className="edit">
          <i onClick={this.onEditEnable} className="material-icons">
            edit
          </i>
        </span>
      </div>
    );
  }
}
