import React, { Component } from "react";
import Countries from "./Countries";

class Section4 extends Component {
  render() {
    return (
      <div class="section4">
        <div className="part1-section4">
          <h1>
            The world's <br /> biggest healthcare platform
          </h1>

          <p>
            We work from 6 offices all over the world, bringing Docplanner{" "}
            <br /> Group to life in almost 20 countries.
          </p>
        </div>

        <div className="part2-section4">
          <Countries />
        </div>
      </div>
    );
  }
}
export default Section4;