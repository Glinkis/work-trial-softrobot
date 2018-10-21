import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import ErrorMessage from "../components/ErrorMessage";
import Table from "../components/Table";

class Content extends React.Component {
  retry = () => {
    const { dispatch } = this.props;
    dispatch(fetchItems);
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems);
  }

  render() {
    const { errors, items, isFetching } = this.props;

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

    return <Table data={items} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Content);
