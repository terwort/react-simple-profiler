import { connect } from "react-redux";
import Table from "./Table";

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    records: state.records
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

export default TableContainer;
