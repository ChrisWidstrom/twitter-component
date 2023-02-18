import React from "react";
import moment from "moment";

const Time = ({ time }) => <span className="time">{moment(time).fromNow()}</span>;

export default Time;
