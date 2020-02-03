import React, { Component } from "react";
import Stars from "./Stars";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState = ({
      text: e.target.value
    });
  }


  render() {

    return (
      <header>
        <input type="text" onChange={this.handleChange} />
      </header>
    );
  }
}

export default Header;