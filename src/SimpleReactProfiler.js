import React, { Component } from "react";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import TableContainer from "./Table/TableContainer";
import prettyMs from "pretty-ms";
import { createGuid } from "./helpers";
import constants from "./Store/constants";

const store = configureStore();

export const record = async (message, providedFunc) => {
  const recordObject = {
    id: createGuid(),
    message
  };

  // Record the time before, and after the function is called
  const startTime = performance.now();
  await providedFunc();
  const endTime = performance.now();

  // set the duration by subtracting the startTime from endtime, and make it pretty
  recordObject.duration = prettyMs(endTime - startTime, {
    msDecimalDigits: 2,
    secDecimalDigits: 2
  });

  store.dispatch({
    type: constants.ADD_RECORD,
    record: recordObject
  });
};

class SimpleReactProfiler extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="simpleReactProfiler">
          <h3>React Simple Profiler</h3>
          <TableContainer />
        </div>
      </Provider>
    );
  }
}

export default SimpleReactProfiler;
