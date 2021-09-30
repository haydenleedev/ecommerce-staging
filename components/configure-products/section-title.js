import React, { Component } from "react";
import configureProduct from "./configure-products.module.scss";

class SectionTitle extends Component {
  render() {
    return (
      <div className={configureProduct["form-title-wrap"]}>
        <span className={configureProduct.number}>{this.props.order}</span>
        <h2 className={configureProduct["form-title"]}>{this.props.title}</h2>
      </div>
    );
  }
}
export default SectionTitle;
