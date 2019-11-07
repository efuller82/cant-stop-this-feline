import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper flex-column" id="rumbleGalleryCol">{props.children}</div>;
}

export default Wrapper;
