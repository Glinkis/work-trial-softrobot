import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchItems, updateItem } from "../actions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";

@connect(state => state)
export default class Content extends React.Component {
  retry = () => {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchItems());
  };
  updateItem = item => {
    const { dispatch } = this.props;
    dispatch(updateItem(item));
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchItems());
  }
  render() {
    const { errors, users, items, isFetching } = this.props;

    if (errors && errors.length) {
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

    if (users && items) {
      return (
        <Table users={users} items={items} onUpdateItem={this.updateItem} />
      );
    }

    return null;
  }
}
