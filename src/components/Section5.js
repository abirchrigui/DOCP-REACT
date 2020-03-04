import React, { Component } from "react";
import Photos from "./Photos";

class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <div className="">
          <h1>
            Improve the lives of millions. <br />
            Change yours forever
          </h1>

          <p>
            More than 500 team mates share our same vision, goals and passion.{" "}
            <br /> With offices in Warsaw, Barcelona, Istanbul, Rome,Czech
            Republic, <br /> Mexico City, Colombia and Curitiba, our search for
            great talent never <br /> stops.
          </p>
        </div>
        <div className="countries">
          <Photos />
        </div>
      </div>
    );
  }
}
export default Section5;
