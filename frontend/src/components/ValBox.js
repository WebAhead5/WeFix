import { Component } from "react";
import React from "react";

class ValBox extends Component {
  render() {
    const { data, name, onChange } = this.props;

    return data.map((item, index) => {
      return (
        <p value={item[name]} key={index}>
          {item[name]}{" "}
        </p>
      );
    });
  }
}
export default ValBox;
