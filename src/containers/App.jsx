import React from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import { REQUEST_DATA, RECEIVE_DATA } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: REQUEST_DATA });
  }
  render() {
    const { items, isFetching } = this.props;
    return (
      <>
        <h1>Example List</h1>
        {isFetching ? <span>Loading...</span> : <Table data={items} />}
      </>
    );
  }
}

export default connect()(App);
