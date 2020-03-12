import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
//import { Col } from 'react-bootstrap';
import Logo from "./component/00Images/MYtineraryLogo.png";
import BrowserButton from "./component/Browsing/BrowserButton";
import LoginButton from "./component/Login/LoginButton";
import RegisterButton from "./component/Register/RegisterButton";
import HomeButton from "./component/Home/HomeButton";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <Row>
              <img className="logoImg" src={Logo} alt="" />
            </Row>
            <Row>
              <h2 className="motoTxt">
                Find your perfect trip, designed by insiders who know and love
                their cities
              </h2>
            </Row>
            <Row>
              <h1 className="startTxt">Start browsing</h1>
            </Row>
            <Row>
              <BrowserButton />
            </Row>
            <Row>
              <h2 className="ownItineraryTxt">
                Want to build your own MYtinerary
              </h2>
            </Row>
            <Row>
              <LoginButton />
              <RegisterButton />
            </Row>
            <Row>
              ssName="goHome">
              <HomeButton />
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}
