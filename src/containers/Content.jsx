import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchItems, updateItem } from "../actions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "./Table";

@connect(state => state)
export default class Content extends React.Component {
  retry = () => {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchItems());
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
      return <Table />;
    }

    return null;
  }
}
