import React from "react";
import DropDown from "../components/DropDown";
import partTable from "../data/partTable.json";
import ValBox from "../components/ValBox";
import mechanic from "../img/mechanic.jpeg";

export class DiagnoseFix extends React.Component {
  state = {
    part: "",
  };
  render() {
    const onPartchange = (part) => this.setState({ part });
    const onPricechange = (price) => this.setState({ price });

    return (
      <div className="TiersPage">
        <img src={mechanic} id="mech-pic" />
        <div className="Form">
          <p> Please Select item:</p>
          <div className="tire-details">
            <span> Item</span>
            <DropDown data={partTable} name="parts" onChange={onPartchange} />
          </div>
          <div className="Diagnose">
            <span> Working Hours</span>
            {this.state.part && (
              <ValBox
                data={this.state.part.hours}
                name="hours"
                onChange={onPricechange}
              />
            )}

            <span> Price</span>
            {this.state.part && (
              <ValBox
                data={this.state.part.price}
                name="price"
                onChange={onPricechange}
              />
            )}
          </div>

          <div className="productdesc">
            {this.state.part && (
              <ValBox
                data={this.state.part.describtion}
                name="describtion"
                onChange={onPricechange}
              />
            )}
          </div>
          <button type="button" className="addcarttext">
            ADD To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default DiagnoseFix;

//     return (
//       <div className="TiersPage">
//         <div className="imageicon1">
//             <img src={carrepair} className="imagebackground"/>
//             <img src={loginImg} className="imageicon" />
//             <button className="backbutt" >Back</button>
//           </div>

//           <div className="Form1">
//             <p> Please Select item:</p>
//             <div className="tire-details">
//               <span> Item</span>
//          <DropDown data={partTable} name="parts" onChange={onPartchange}
//          /> </div>
//                             <span> Working Hours</span>

//          <div className="workinghours">
//                { this.state.part &&  <ValBox data={this.state.part.hours} name="hours"  />}
//                 </div>
//                 <span> Price</span>
//                 <div className="workinghours">
//                { this.state.part &&  <ValBox data={this.state.part.price} name="price"  />}
//                 </div>
//                 <span> Product Description: </span>
//                 <div className="desc">
//         { this.state.part &&  <ValBox data={this.state.part.describtion} name="describtion" />}
//         </div>
//         <button type="button" className="addcarttext" >
//            ADD To Cart
//         </button>
//          </div>
//          </div>

//     );
//   }
// }

// export default DiagnoseFix
