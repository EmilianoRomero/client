import React, { Component } from "react";
import "./BrowserButton.css";
import Arrow from "../00Images/circled-right-2.png";
import { Link } from "react-router-dom";
import "./BrowserButton.css";

export default class BrowserButton extends Component {
  render() {
    return (
      <div className="startBrowsing">
        <Link className="startBrowsing" exact to="/">
          <img
            src={Arrow}
            className="arrowImg"
            alt=""
            activeClassName="browingLink-active"
          />
        </Link>
      </div>
    );
  }
}

// traditionally 
{/* <a href="https://github.com/Joeyryanbridges">
<Image src="giticon.png" className="githubIcon" />
</a> */}
