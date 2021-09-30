import React, { Component } from "react";
import addOn from "./add-on-card.module.scss";

class AddOnCard extends Component {
  render() {
    return (
      <>
        <div className={addOn["input-card"]}>
          <input
            id={this.props.option}
            name={this.props.option}
            type="checkbox"
          />
          <label htmlFor={this.props.option}>
            <p>{this.props.text}</p>
          </label>
        </div>
      </>
    );
  }
}

export default AddOnCard;
