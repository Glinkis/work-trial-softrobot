import React from "react";
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
    this.state = {
      isEditing: false,
      ...props.item
    };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
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
    this.props.onUpdateItem({ ...itemValues });
  };
  render() {
    if (this.state.isEditing) {
      return (
        <form className="table-row" onSubmit={this.onSubmit}>
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <input
            name="date"
            type="text"
            value={this.state.date}
            onChange={this.handleInputChange}
          />
          <input
            name="owner"
            ype="text"
            value={this.state.userId}
            onChange={this.handleInputChange}
          />
          <span className="status">
            <input
              name="status"
              type="checkbox"
              checked={!!this.state.status}
              onChange={this.handleInputChange}
            />
          </span>
          <span className="edit">
            <button type="submit">Save</button>
            <button onClick={this.onEditCancel}>Cancel</button>
          </span>
        </form>
      );
    }

    return (
      <div className="table-row">
        <span>{`${this.state.text.slice(0, 12)}...`}</span>
        <span>{this.state.date.slice(0, 10)}</span>
        <span>{this.props.user}</span>
        <span className="status">
          <span className={this.state.status ? "enabled" : null} />
        </span>
        <span className="edit">
          <button onClick={this.onEditEnable}>Edit</button>
        </span>
      </div>
    );
  }
}

export class Table extends React.Component {
  render() {
    const { users, items, onUpdateItem } = this.props;
    return (
      <div className="table">
        {<TableHeader />}
        {items.map(item => (
          <TableRow
            key={item.id}
            user={users[item.userId]}
            item={item}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </div>
    );
  }
}

export default Table;
