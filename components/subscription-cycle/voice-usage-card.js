import React, { Component } from "react";
import subscription from "./subscription-cycle.module.scss";
import layout from "../../styles/layout.module.scss";

class VoiceUsageCard extends Component {
  render() {
    return (
      <div className={`${layout.col} ${layout["col-3"]}`}>
        <div className={`${layout.inner}  ${layout["bg-lightgray"]}`}>
          <h3 className={subscription["text-medium"]}>Voice Usage</h3>
          <ul className={`${layout.bullets} ${subscription["text-small"]}`}>
            <li>Usage will be limited to US domestic only.</li>
            <li>
              Usage will be billed at current list pricing, and is subject to
              change
            </li>
          </ul>
          <ul className={`${layout.lists} ${subscription["text-small"]}`}>
            <li className={subscription["text-small"]}>
              US Inbound Toll-free:{" "}
              <span className={subscription["text-highlight"]}>$x</span>/ min
            </li>
            <li className={subscription["text-small"]}>
              {" "}
              US Inbound Local:{" "}
              <span className={subscription["text-highlight"]}>$y</span>/ min
            </li>
          </ul>
          <ul className={`${layout.lists} ${subscription["text-small"]}`}>
            <li className={subscription["text-small"]}>
              US Inbound Toll-free:{" "}
              <span className={subscription["text-highlight"]}>$x</span>/ min
            </li>
            <li className={subscription["text-small"]}>
              {" "}
              US Inbound Local:{" "}
              <span className={subscription["text-highlight"]}>$y</span>/ min
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default VoiceUsageCard;
