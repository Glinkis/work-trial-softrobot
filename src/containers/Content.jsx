import React from "react";
import { connect } from "react-redux";
import { fetchItems, fetchUsers } from "../actions/requestActions";
import ErrorMessage from "../components/ErrorMessage";
import Title from "../components/Title";
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
    const { errors, users, items, openRequests } = this.props;

    if (errors.length) {
      return (
        <div>
          {errors.map((error, i) => (
            <ErrorMessage key={i} message={error} />
          ))}
          <br />
          <i onClick={this.retry} className="material-icons">
            refresh
          </i>
        </div>
      );
    }

    if (openRequests) {
      return <div>Loading...</div>;
    }

    if (users.length && items.length) {
      return (
        <>
          <Title>Example List</Title>
          <Table />
        </>
      );
    }

    return null;
  }
}
