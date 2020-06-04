import { Component } from 'react';
import React from 'react'



class DropDown extends Component {

  render() {
      const {data,name, onChange }=this.props

    return (
      <select onChange= {event=>{ 
        const val=event.target.value
        var data1 = data.filter(function(value) {
          return value[name] ===val;
        });
        onChange(data1[0])
        console.log(data1)


      }}>
          <option> </option>
        
        {data.map((item, index) => {
          return( 
          <option value={item[name]} key={index}>{item[name]} </option>
          )
        })
        }
        </select>
    );

  }
}

export default DropDown