import React from "react";

const Divider = ({ height = 20 }) => {
  return <div className="hr" style={{ marginTop: `${height}px`, marginBottom: `${height}px`, background:  'lightgray', height: '2px' }}></div>;
};

export default Divider;
