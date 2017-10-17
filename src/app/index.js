import React from "react";
import{render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {
  constructor() {
    super();    
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }
  onGreet() {
    alert("hello!");
  }
  onChangeLinkNAme(newName) {
    this.setState({
      homeLink: newName
    });
  }
  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }
  render() {
    let homeCmp = "";
    if(this.state.homeMounted) {
      homeCmp = (
        <Home 
          name={"yasin"} 
          initialAge={39} 
          greet={this.onGreet}
          changeLink={this.onChangeLinkNAme.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    var user = {
      name: "awni",
      hobbies: ["being angry", "cooking", "hating trump"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount home component</button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
