import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let newResult = "";
    if (this.props.title === "Computer" && this.props.result !== "tie" && this.props.result !== "") {
      newResult = this.props.result === "win" ? "lose" : "win";
    } else newResult = this.props.result;
    return (
      <div className={`box`}>
        <h1>{this.props.title}</h1>
        <div>
          <img className="box-img" src={this.props.item?.src} alt="" />
        </div>
        <h2>{newResult}</h2>
      </div>
    );
  }
}
