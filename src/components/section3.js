import React, { Component } from "react";
import Companies from "./Companies";
class Section3 extends Component {
  render() {
    return (
      <div className="section3">
        <div className="rightsection">
          <p>
            We are a global <br /> company <br />
            with local culture
          </p>
        </div>
        <div className="leftsection">
          <Companies />
        </div>
      </div>
    );
  }
}
export default Section3;
