import React from "react";
import { connect } from "react-redux";
import { fetchItems, editRow, cancelEdit } from "../actions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";

class Content extends React.Component {
  retry = () => {
    const { dispatch } = this.props;
    dispatch(fetchItems());
  };

  onEditRow = row => {
    const { dispatch } = this.props;
    dispatch(editRow(row));
  }

  onEditCancel = () => {
    const {dispatch} = this.props;
    dispatch(cancelEdit());
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
  }

  render() {
    const { errors, items, isFetching, editableRow } = this.props;

    if (errors) {
      return (
        <div>
          {errors.map((error, i) => (
            <ErrorMessage key={i} message={error} />
          ))}
          <hr />
          <button onClick={this.retry}>Retry</button>
        </div>
      );
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    if (items) {
      return (
        <Table
          data={items}
          editableRow={editableRow}
          onEditRow={this.onEditRow}
          onEditCancel={this.onEditCancel}
        />
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Content);
