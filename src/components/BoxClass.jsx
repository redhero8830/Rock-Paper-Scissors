// import React, { Component } from "react";

// export default class BoxClass extends Component {
//   constructor() {
//     super();
//     this.result = "";
//   }
//   getResult = () => {
//     if (
//       this.props.title === "Computer" &&
//       this.props.result !== "Tie" &&
//       this.props.result !== ""
//     ) {
//       this.newResult = this.props.result === "Win" ? "Lose" : "Win";
//     } else {
//       this.newResult = this.props.result;
//     }
//   };
//   render() {
//     this.getResult();
//     return (
//       <div className={`box ${this.newResult}`}>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.item && this.props.item.name}</h2>
//         <img
//           className="box-img"
//           src={this.props.item && this.props.item.img}
//           alt=""
//         />
//         <h2>{this.newResult}</h2>
//       </div>
//     );
//   }
// }
