import React from 'react'
import loginImg from "../login/logo.png"
import carPayment from "../services/carPayment.png"


export class Payment extends React.Component {

    render() {
        return (
            <div className="TiersPage">
                <div className="imageicon1">
                    <img src={carPayment} className="imagebackground" />
                    <img src={loginImg} className="imageicon" />
                    <button className="backbutt" >Back</button>
                </div>
                <div className="Form1">
                    <h1>Almost Done</h1>
                    <h2> Please Enter Billing Information</h2>
                    <h3>Payment Method</h3>
                    <b> Name On Card<br></br> </b>
                        <input type="text" name="name" />
                        <b ><br></br>Card Number <br></br></b>
                        <input type="text" name="name" />
                        <input type="text" name="name" placeholder="Expiration date" />
                        <input type="text" name="name" placeholder="CVV"/>
                        <button type="button" className="addcarttext" >
               ADD To Cart
            </button>
                    </div>
                </div>





        )
    }
}
export default Payment