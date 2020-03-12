import React from "react";
import "./BrowserButton.css";
import Arrow from "../00Images/circled-right-2.png";

const BrowserButton = props => (
  <div className="startBrowsing">
    <img className="arrowImg" src={Arrow} alt="" />
  </div>
);

export default BrowserButton;
