// @ts-check
import React from "react";
import "./TableRow.scss";
import TableRowEditable from "./TableRowEditable";

export default class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onEditEnable = () => {
    this.setState({ isEditing: true });
  };

  onEditDisable = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { isEditing } = this.state;
    const { users, item, onUpdate, isUpdating, failedToUpdate } = this.props;
    const { text, date, userId, active } = this.props.item;

    if (isEditing || isUpdating || failedToUpdate) {
      return (
        <TableRowEditable
          users={users}
          item={item}
          onSubmit={this.onEditDisable}
          onCancel={this.onEditDisable}
          onUpdate={onUpdate}
          isUpdating={isUpdating}
          failedToUpdate={failedToUpdate}
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
