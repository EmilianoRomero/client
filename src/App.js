import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from './component/Header/Menu';
import Login from "./component/Header/Login";
import Logo from "./component/Images/MYtineraryLogo.png";
import Arrow from "./component/Images/circled-right-2.png";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <div className="header">
              <Login />
              <Menu />
            </div>
            <div className="logo">
              <img className="logoImg" src={Logo} alt="" />
            </div>
            <div className="moto">
              <h2 className="motoTxt">
                Find your perfect trip, designed by insiders who know and love
                their cities
              </h2>
            </div>
            <div className="arrow">
              <img className="arrowImg" src={Arrow} alt="" />
            </div>
            <div className="titleGallery">
              <h3 className="titleGalleryTxt">Popular MYtineraries</h3>
            </div>
            <div className="imgGallery">
              <h2>modal</h2>
            </div>
            <div className="slideBar">
              <h2>slide bar</h2>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
