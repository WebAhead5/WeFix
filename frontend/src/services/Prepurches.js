import React from 'react';
 import loginImg from "../login/logo.png"
 import carsale from "../services/carsale.jpg"


export class Prepurches extends React.Component{


    render() {



        return (
          <div className="TiersPage">
            <div className="imageicon1"> 
                <img src={carsale} className="imagebackground"/>
                <img src={loginImg} className="imageicon" />

              </div>

              <div className="Form">
                <p> Please Select Prefered Brand:</p>
            <p> working hours:</p>
            <p>Product Description</p>
            <div className="productdesc">
            <p> This inspection package consists of mechanical, body And electric inspections.</p>

            </div>
            <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
             </div>
             </div>


        );
      }
    }

    export default Prepurches