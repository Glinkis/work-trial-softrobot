// @ts-check
import React from "react";
import Toggle from "react-toggle";
import ErrorMessage from "./ErrorMessage";
import getFormattedTime from "../utils/getFormattedTime";

export default class TableRowEditable extends React.Component {
  constructor(props) {
    super(props);

    // Create default values if no prop item exists.
    const item = props.item || {
      id: this.props.items.length,
      text: "",
      date: "",
      userId: 0,
      active: false
    };

    this.state = { ...item };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, date: getFormattedTime() });
  };

  onCancel = () => {
    this.props.onCancel();
  };

  handleInputChange = ({ target }) => {
    if (target.type === "checkbox") {
      this.setState({ [target.name]: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, userId, active } = this.state;
    const {
      users,
      failedToUpdate,
      isUpdating,
      errorMessage,
      updateMessage
    } = this.props;

    if (failedToUpdate) {
      return (
        <div className="table-row">
          <ErrorMessage message={errorMessage} />
          <i onClick={this.onSubmit} className="material-icons">
            refresh
          </i>
        </div>
      );
    }

    if (isUpdating) {
      return (
        <div className="table-row">
          <span className="fill">{updateMessage}</span>
        </div>
      );
    }

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
          <i onClick={this.onCancel} className="material-icons">
            cancel
          </i>
          <button style={{ display: "none" }} type="submit" />
        </span>
      </form>
    );
  }
}

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
