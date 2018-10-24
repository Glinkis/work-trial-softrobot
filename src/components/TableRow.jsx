import React from "react";
import Toggle from "react-toggle";
import ErrorMessage from "../components/ErrorMessage";
import getFormattedTime from "../utils/getFormattedTime";
import "./TableRow.scss";

const TextInput = ({ value, onChange }) => (
  <textarea name="text" value={value} onChange={onChange} />
);

const UserInput = ({ users, value, onChange }) => (
  <select name="userId" value={value} onChange={onChange}>
    {users.map((user, i) => (
      <option key={i} value={i}>
        {user}
      </option>
    ))}
  </select>
);

const StatusInput = ({ value, onChange }) => (
  <span className="status">
    <Toggle
      name="active"
      type="checkbox"
      checked={!!value}
      onChange={onChange}
    />
  </span>
);

export default class TableRow extends React.Component {
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
    this.props.onUpdate({ ...itemValues, date: getFormattedTime() });
    this.setState({ isEditing: false });
  };

  render() {
    const { text, date, userId, active, isEditing } = this.state;
    const { users, isUpdating, failedToUpdate } = this.props;

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
          <TextInput value={text} onChange={this.handleInputChange} />
          <span />
          <span />
          <UserInput
            users={users}
            value={userId}
            onChange={this.handleInputChange}
          />
          <StatusInput value={active} onChange={this.handleInputChange} />
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
