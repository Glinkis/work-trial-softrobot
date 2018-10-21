import React from "react";
import { connect } from "react-redux";
import Title from "../components/Title";
import Table from "../components/Table";
import { fetchItems } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems);
  }
  render() {
    const { items, isFetching } = this.props;
    return (
      <>
        <Title />
        {isFetching ? <span>Loading...</span> : <Table data={items} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(App);
