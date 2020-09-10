import React from "react";

const Body = (props) => {
  const { url } = props;

  return (
    <div className="image">
      <img src={url} alt={"space"} />
    </div>
  );
};

export default Body;
