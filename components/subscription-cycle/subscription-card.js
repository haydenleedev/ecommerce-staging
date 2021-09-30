import React, { Component } from "react";
import { IconCheckCircle } from "components/icons";
import subscription from "./subscription-cycle.module.scss";
import layout from "../../styles/layout.module.scss";

class SubscriptionCard extends Component {
  render() {
    return (
      <div
        className={`${layout.col} ${layout["col-3"]} ${layout.pointer} ${this.props.flag}`}
      >
        <span className={layout["flag-blue"]}>save $200</span>
        <div tabIndex="-1" className={`${layout.inner}`}>
          <IconCheckCircle color="#427f11" />
          <p className={subscription.hidden}>
            Choose your UJET package subscription cycle
          </p>
          <h3 className={subscription["subscription-title"]}>
            {this.props.cycle}
          </h3>
          <p
            className={`${this.props.highliteStyle} ${subscription["text-medium"]}`}
          >
            {this.props.highlite}
          </p>
          <p className={subscription["text-large"]}>
            {this.props.price}
            <span className={subscription["text-suffix"]}>/user/month</span>
          </p>
          <p className={subscription["text-small"]}>{this.props.billing}</p>
        </div>
      </div>
    );
  }
}
export default SubscriptionCard;
