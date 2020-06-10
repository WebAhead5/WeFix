import { Component } from "react";
import React from "react";

class DropDown extends Component {
  render() {
    const { data, name, onChange } = this.props;
    //console.log(1, this.props)
    return (
      <select onSelect={()=> this.props.onSelect}
        className="car-details"
        onChange={(event) => {
          const val = event.target.value;
          var data1 = data.filter(function (value) {
            return value[name].toString() === val.toString();
          });
          onChange(this.props.statename,data1[0]);
          console.log(data1);
        }}
      >
        <option> </option>

        {data.map((item, index) => {
          return (
            <option value={item[name]} key={index}>
              {item[name]}{" "}
            </option>
          );
        })}
      </select>
    );
  }
}

export default DropDown;
