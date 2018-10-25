import React from "react";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import TableRowEditable from "../components/TableRowEditable";
import "./AddItem.scss";

@connect(state => state)
export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleClosed = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onAdd = item => {
    console.log(item);
    const { dispatch } = this.props;
    dispatch(updateItem(item));
    this.toggleClosed();
  };

  render() {
    const { isOpen } = this.state;
    const { users, items } = this.props.request;
    const { updating, failed } = this.props.item;

    const isUpdating = updating.includes(items.length);
    const failedToUpdate = failed.includes(items.length);

    if (!isOpen && !isUpdating && !failedToUpdate) {
      return (
        <div className="add-item">
          <i className="material-icons" onClick={this.toggleClosed}>
            add_circle
          </i>
        </div>
      );
    }

    return (
      <TableRowEditable
        users={users}
        items={items}
        onSubmit={this.toggleClosed}
        onCancel={this.toggleClosed}
        onSubmit={this.onAdd}
        isUpdating={isUpdating}
        failedToUpdate={failedToUpdate}
      />
    );
  }
}
