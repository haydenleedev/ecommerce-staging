import React, { Component } from "react";
import configureProduct from "./configure-products.module.scss";
import licenses from "./licenses.module.scss";

class Licenses extends Component {
  render() {
    return (
      <div
        className={`${licenses["input-number-wrap"]} ${configureProduct["mlr-38px"]}`}
      >
        <div className={licenses["input-number"]}>
          <div className={licenses["input-small"]}>
            <input
              id="licenses"
              type="number"
              defaultValue="10"
              autoComplete="off"
              aria-label="Licenses"
              min="1"
              name="licenses"
              className={licenses["number-input"]}
              role="spinbutton"
              aria-valuemin="1"
              aria-valuenow="10"
            />
          </div>
        </div>
        <span
          className={`${licenses["text-regular"]} ${configureProduct["ml-20px"]}`}
        >
          license(s)
        </span>
      </div>
    );
  }
}
export default Licenses;
