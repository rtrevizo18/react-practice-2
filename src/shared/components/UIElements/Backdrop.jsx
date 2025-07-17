import ReactDOM from "react-dom";

import "./Backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.querySelector("#backdrop-hook")
  );
};

export default Backdrop;
