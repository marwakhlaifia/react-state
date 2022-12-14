import React, { Component } from "react";
import "./App.css";
//import "./Component/SetInterval";
import Timer from "./Components/SetInterval";
import picture from "./Components/marwa.jpg";

class App extends React.Component {
  state = {
    fullName: "Marwa Khlaifia",
    bio: "JS full stack developer.",
    imgSrc: { picture },
    show: false,
  };

  Active = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.Active}>Show</button>
        {this.state.show ? (
          <div>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <img src={picture} alt="profile" />
          </div>
        ) : (
          <p>Press the button!</p>
        )}
        <Timer />
      </div>
    );
  }
}

export default App;