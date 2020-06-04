import React from 'react';
 import loginImg from "../login/logo.png"
 import carsale from "../services/carsale.jpg"
 import DropDown from "../components/DropDown"
 import partTable from "../data/partTable.json"
import ValBox from '../components/ValBox';

export class DiagnoseFix extends React.Component{

    state = {
        part: ''
      }
    render() {
        const onPartchange = (part) => this.setState({ part })
        const onPricechange = (price) => this.setState({ price })



        return (
          <div className="TiersPage">
            <div className="imageicon1"> 
                <img src={carsale} className="imagebackground"/>
                <img src={loginImg} className="imageicon" />

              </div>

              <div className="Form">
                <p> Please Select item:</p>
                <div className="tire-details">
                  <span> Item</span>
             <DropDown data={partTable} name="parts" onChange={onPartchange}
             /> </div>
             <div className="Dagnose">
                   <span> Working Hours</span>
                   { this.state.part &&  <ValBox data={this.state.part.hours} name="hours" onChange={onPricechange} />}

                    </div>

                    <div className="Dagnose">
                   <span> Price</span>
                   { this.state.part &&  <ValBox data={this.state.part.price} name="price" onChange={onPricechange} />}
                    </div>

            <div className="productdesc">
            { this.state.part &&  <ValBox data={this.state.part.describtion} name="describtion" onChange={onPricechange} />}

            </div>
            <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
             </div>
             </div>


        );
      }
    }

    export default DiagnoseFix