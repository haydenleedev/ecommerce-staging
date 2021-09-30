import React, { Component } from "react";
import review from "./review-order.module.scss";

class TodaysCharge extends Component {
  render() {
    return (
      <div className={review["review-wrap"]}>
        <h2 className={review["review-title"]}>Choose review Cycle</h2>

        <div className={review["mlr-30px"]}>
          <ul className={review["space-between-wrap"]}>
            <li>
              Enterprise package with 10 licenses ( Annual )<span>$1000</span>
            </li>
            <li>
              Add-ons: Add-on 1 with 10 licenses ( Annual )<span>$100</span>
            </li>
            <li>
              Add-on 2 with 10 licenses ( Annual )<span>$200</span>
            </li>
          </ul>

          <div
            className={`${review["space-between-wrap"]} ${review["top-divider"]}`}
          >
            <div>
              <p>Subtotal Before Tax:</p> <p>$1300</p>
            </div>
            <div>
              <p>Estimated Taxes/Fee: </p> <p>$0.00</p>
            </div>
            <div>
              <p>Total: </p> <p>$1300</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodaysCharge;
