import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";

class Content extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems);
  }
  render() {
    const { error, items, isFetching } = this.props;

    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (isFetching) {
      return <span>Loading...</span>;
    }

    return <Table data={items} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Content);
