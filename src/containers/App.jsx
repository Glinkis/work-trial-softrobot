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
    const { error, items, isFetching } = this.props;

    const element = (() => {
      if (error) {
        return <span>{error}</span>;
      }

      if (isFetching) {
        return <span>Loading...</span>;
      }

      return <Table data={items} />;
    })();

    return (
      <>
        <Title />
        {element}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(App);
