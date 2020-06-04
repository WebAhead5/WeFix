import React from 'react';
 import loginImg from "../login/logo.png"
 import tireImg from "../services/tires.jpg"
 import DropDown from "../components/DropDown"
import tireTable from "../data/tierTable.json"

export class Tires extends React.Component{
  state = {
    tire: ''
  }

    render() {
      const onTirechange = (tire) => this.setState({ tire })
      const onSizechange=(model)=> this.setState({model})
      const onMeasurechange=(measure)=> this.setState({measure})


        return (
          <div className="TiersPage">
            <div className="imageicon1"> 
                <h1 >Tires</h1>
                <img src={tireImg} className="imagebackground"/>
                <img src={loginImg} className="imageicon" />
              </div>

              <div className="Form">
                <p> Please Select Prefered Brand:</p>
                <div className="tire-details">
                  <span> Company</span>
             <DropDown data={tireTable} name="title" onChange={onTirechange} />
                </div>
                <div className="tire-details">
                <span> Size</span>
                <DropDown data={tireTable} name="title" onChange={onSizechange} />

            </div>
            <div className="car-details">
            <span> Measure</span>
            { this.state.model &&  <DropDown data={this.state.tire.measure} name="measure" onChange={onMeasurechange} />}
            </div>

            <p> working hours:</p>
            <p>price per Tire:</p>
            <p>Quantity:</p>
            <p>Product Description</p>
            <div className="productdesc">
            <p> This inspection package consists of mechanical, body & electric inspections.</p>

            </div>
            <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
             </div>
             </div>


        );
      }
    }

    export default Tires