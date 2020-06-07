import React from 'react';
 import loginImg from "../login/logo.png"
 import carsale from "../services/carsale.jpg"
 import DropDown from "../components/DropDown"
 import ValBox from "../components/ValBox"

import purchTable from "../data/purchTable.json"

export class Prepurches extends React.Component{
  state = {
    tire: {measure:[],hours:[],price:[],describtion:[]}
  }

    render() {
      const onTirechange = (tire) => this.setState({ tire })



        return (
          <div className="TiersPage">
            <div className="imageicon1"> 
                <h1 >Tires</h1>
                <img src={carsale} className="imagebackground"/>
                <img src={loginImg} className="imageicon" />
                <button className="backbutt" >Back</button>

              </div>
              <div className="Form1">
                <h2> Please Select Prefered Brand:</h2>
                <div className="tire-details">
                  <span> Company:</span>
             <DropDown data={purchTable} name="service" onChange={onTirechange} />
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
                    <div className="workinghours">
                     <ValBox data={this.state.tire.describtion} name="describtion" />
                    </div>            <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
            </div>
    
             </div>


        );
      }
    }


    

    export default Prepurches