import React from "react";
import { connect } from "react-redux";

const InfoCard = ({ info }) => (
  <div>
      <div>{info.title}</div>
      <div>{info.value}</div>

  </div>
);

// export default Todo;
export default connect(
  null,
)(InfoCard);