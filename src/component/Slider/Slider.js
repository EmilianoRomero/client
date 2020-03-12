import React, { useState, useEffect, useRef } from "react"
import Slide from "./Slide"
import "./Slider.css"
//import Arrow from './Arrow'
//import { css, jsx } from '@emotion/core'

const Slider = () => {
  
  return (
    <div
      className="container-fluid"
      id="img-gallery-wrapper"
      style={{ width: "auto", height: "auto" }}
    >
      <Slide />
    </div>
  );
}

export default Slider
