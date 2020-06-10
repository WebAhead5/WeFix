import { Component } from "react";
import React from "react";

class ValBox extends Component {
  render() {
    const { data, name, onChange } = this.props;

    return data.map((item, index) => {
      return (
        <div className="car-details2">
          <p value={item[name]} key={index}>
            {item[name]}{" "}
          </p>
        </div>
      );
    });
  }
}
export default ValBox;
