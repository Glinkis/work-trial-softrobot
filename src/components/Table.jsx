import React from "react";
import "./Table.scss";

const TableHeader = () => (
  <div className="table-header">
    <span>Text</span>
    <span>Date</span>
    <span>Owner</span>
    <span>Status</span>
  </div>
);

const TableRow = ({ item }) => {
  const { text, date, owner, status } = item;
  return (
    <div className="table-row">
      <span className="text">{text.slice(0, 12)}...</span>
      <span className="date">{date}</span>
      <span className="owner">{owner}</span>
      <span className="status"><span className={status ? "enabled" : null} /></span>
    </div>
  )
});

export class Table extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="table">
        {<TableHeader />}
        {data.map((item, i) => <TableRow key={i} item={item} />)}
      </div>
    );
  }
}

export default Table;
