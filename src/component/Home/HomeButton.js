import React from "react"
import './HomeButton.css'
import Home from "../00Images/homeIcon.png";

const HomeButton = props => (
    <div className="linkHome">
        <img className="homeImg" src={Home} alt="" />
    </div>
);

export default HomeButton