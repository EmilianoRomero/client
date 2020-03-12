import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./component/00Images/MYtineraryLogo.png";
import BrowserButton from "./component/Browsing/BrowserButton";
import LoginLink from "./component/Login/LoginLink";
import RegisterLink from "./component/Register/RegisterLink";
import HomeButton from "./component/Home/HomeButton";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <div className="app-container">
              <div className="logo">
              <img className="logoImg" src={Logo} alt="" />
              </div>
            <div className="moto">
              <h1 className="motoTxt">
                Find your perfect trip, designed by insiders who know and love
                their cities
              </h1>
              </div>
            <div className= "start">
              <h1 className="startTxt">Start browsing</h1>
            </div>
              <BrowserButton />
            <div className="legend">
              <h2 className="legendTxt">
                Want to build your own MYtinerary
              </h2>
            </div>
            <div class= "loginReg">
              <LoginLink />
              <RegisterLink />
            </div>
              <HomeButton />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
