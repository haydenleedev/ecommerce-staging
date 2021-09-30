import React, { Component } from "react";
import Link from "next/link";
import ProductFeaturesIncludes from "./features-includes";
import ProductFeaturesAddons from "./features-addons";
import features from "./features.module.scss";

class ProductFeatures extends Component {
  render() {
    const productId = this.props.productId;
    return (
      <div>
        <input
          className={features["accordion-state"]}
          type="checkbox"
          id={productId}
        ></input>
        <div className={features.product}>
          <label className={features["product-label"]} htmlFor={productId}>
            <h3 className={features["feature-title"]}>View features</h3>
          </label>
          <Link href="#" {...productId}>
            <a
              className={`${features["product-anchor"]} ${features["product-anchor-open"]}`}
            >
              <span className={features["product-anchor-label"]}>
                Open Menu
              </span>
            </a>
          </Link>
          <Link href="#">
            <a
              className={`${features["product-anchor"]} ${features["product-anchor-close"]}`}
            >
              <span className={features["product-anchor-label"]}>
                Close Menu
              </span>
            </a>
          </Link>

          <div
            className={`${features["feature-wrap"]} ${features["accordion-body"]}`}
          >
            <ProductFeaturesIncludes />
            <ProductFeaturesAddons />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductFeatures;
