import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchItems } from "../actions/requestActions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "./Table";

@connect(state => state.request)
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

    if (errors.length) {
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

    if (users.length && items.length) {
      return <Table />;
    }

    return null;
  }
}
