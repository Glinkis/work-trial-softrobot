import React from "react";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import ErrorMessage from "../components/ErrorMessage";
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

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.item, isEditing: false };
  }

  handleInputChange = ({ target }) => {
    if (target.type === "checkbox") {
      this.setState({ [target.name]: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value });
  };

  onEditEnable = () => {
    this.setState({ isEditing: true });
  };

  onEditCancel = () => {
    this.setState({ isEditing: false });
  };

  onSubmit = event => {
    event.preventDefault();
    const { isEditing, ...itemValues } = this.state;
    this.props.onUpdate({ ...itemValues });
    this.setState({ isEditing: false });
  };

  render() {
    const { text, date, userId, status, isEditing } = this.state;
    const { user, isUpdating, failedToUpdate } = this.props;

    if (failedToUpdate) {
      return (
        <div className="table-row">
          <ErrorMessage message={"Failed to update item."} />
          <i onClick={this.onSubmit} className="material-icons">
            refresh
          </i>
        </div>
      );
    }

    if (isUpdating) {
      return <div className="table-row">Updating item...</div>;
    }

    if (isEditing) {
      return (
        <form className="table-row" onSubmit={this.onSubmit}>
          <div>
            <textarea
              name="text"
              value={text}
              onChange={this.handleInputChange}
            />
          </div>{" "}
          <span />
          <input
            name="date"
            type="text"
            value={date}
            onChange={this.handleInputChange}
          />
          <input
            name="owner"
            ype="text"
            value={userId}
            onChange={this.handleInputChange}
          />
          <span className="status">
            <input
              name="status"
              type="checkbox"
              checked={!!status}
              onChange={this.handleInputChange}
            />
          </span>
          <span className="edit">
            <i onClick={this.onSubmit} className="material-icons">
              save
            </i>
            <i onClick={this.onEditCancel} className="material-icons">
              cancel
            </i>
            <button style={{ display: "none" }} type="submit" />
          </span>
        </form>
      );
    }

    return (
      <div className="table-row">
        <span>{`${text.slice(0, 12)}...`}</span>
        <span>{date.slice(0, 10)}</span>
        <span>{user}</span>
        <span className="status">
          <span className={status ? "enabled" : null} />
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
            user={users[item.userId]}
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
