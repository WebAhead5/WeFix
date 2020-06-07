import React from 'react'
import loginImg from "../login/logo.png"
import carPayment from "../services/carPayment.png"


export class Thankmessage extends React.Component {

    render() {
        return (
            <div className="TiersPage">
                <div className="imageicon1">
                    <img src={carPayment} className="imagebackground" />
                    <img src={loginImg} className="imageicon" />
                    <button className="backbutt" >Back</button>
                </div>
                <div className="Form1">
                    <p>WeFix would like to thank you
                    for using our services, a confirmation was sent to your e-mail address, with all details about the deal.
                    For any Questions or Feedback, feel free to contact us at:
                    Email:wefix@gmail.com
                    Mobile:05482827044
                        </p>

                </div>
            </div>





        )
    }
}
export default Thankmessage