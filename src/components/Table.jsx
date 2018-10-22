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

const TableRow = ({ item, onEdit }) => {
  const { id, text, date, owner, status } = item;
  return (
    <div className="table-row">
      <span>{text.slice(0, 12)}...</span>
      <span>{date}</span>
      <span>{owner}</span>
      <span className="status">
        <span className={status ? "enabled" : null} />
      </span>
      <span className="edit">
        <button onClick={() => onEdit(id)}>Edit</button>
      </span>
    </div>
  )
});

class EditableTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.item };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.name]: value });
  }
  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyDown);
  }
  render() {
    const { onCancel } = this.props;
    const { id, text, date, owner, status } = this.state;
    return (
      <div className="table-row">
        <form onSubmit={e => e.preventDefault()}>
          <input name="text" type="text" value={text} onChange={this.handleInputChange}/>
          <input name="date" type="text" value={date} onChange={this.handleInputChange}/>
          <input name="owner" ype="text" value={owner} onChange={this.handleInputChange}/>
          <span className="status">
            <input name="status" type="checkbox" checked={status} onChange={this.handleInputChange}/>
          </span>
          <span className="edit">
            <button type="submit">Save</button>
            <button onClick={onCancel}>Cancel</button>
          </span>
      </form>
    </div>
  )
  }
}

export class Table extends React.Component {
  render() {
    const { data, editableRow, onEditRow, onEditCancel } = this.props;

    console.log(this.props);
    return (
      <div className="table">
        {<TableHeader />}
        {data.map(item => {
          if (item.id === editableRow) {
            return (
              <EditableTableRow
                key={item.id}
                item={item}
                onCancel={onEditCancel}
              />
            );
          }
          return (
            <TableRow
              key={item.id}
              item={item}
              onEdit={onEditRow}
            />
          )
        })}
      </div>
    );
  }
}

export default Table;
