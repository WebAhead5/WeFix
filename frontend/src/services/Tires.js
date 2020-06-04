import React from 'react';
 import loginImg from "../login/logo.png"
 import tireImg from "../services/tires.jpg"
 import DropDown from "../components/DropDown"
import tireTable from "../data/tierTable.json"
import ValBox from '../components/ValBox';

export class Tires extends React.Component{
  state = {
    tire: {measure:[],hours:[],price:[]}
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
              <div className="Form1">
                <h2> Please Select Prefered Brand:</h2>
                <div className="tire-details">
                  <span> Company:</span>
             <DropDown data={tireTable} name="title" onChange={onTirechange} />
                </div>
                <div className="tire-details">
                <span> Measure:</span>
                  <DropDown data={this.state.tire.measure} name="measure" onChange={onMeasurechange} />
            </div>     <div className="tire-details">
                <span> Quantity:</span>
                  <DropDown data={this.state.tire.measure} name="measure" onChange={onMeasurechange} />
            </div>
            <span><br></br> Working Hours:</span>
                <div className="workinghours">
                     <ValBox className="workinghours" data={this.state.tire.hours} name="hours" />
                    </div>
                    <span><br></br> Price:</span>
                <div className="workinghours">
                     <ValBox data={this.state.tire.price} name="price" />
                    </div>



                    <span> Product Description: </span>
            <p className="desc"> This inspection package consists of mechanical, body & electric inspections.</p>
            <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
            </div>
    
             </div>


        );
      }
    }

    export default Tires