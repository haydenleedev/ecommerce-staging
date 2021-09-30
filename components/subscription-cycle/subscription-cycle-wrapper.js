import SubscriptionCard from "./subscription-card";
import VoiceUsageCard from "./voice-usage-card";
import React, { Component } from "react";
import subscription from "./subscription-cycle.module.scss";
import layout from "../../styles/layout.module.scss";

class SubscriptionCycle extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={subscription["form-title-wrap"]}>
          <span className={subscription.number}>1</span>
          <h2 className={subscription["form-title"]}>
            Choose Subscription Cycle
          </h2>
        </div>
        <div className={subscription["mlr-30px"]}>
          <div className={`${layout.row} ${layout["flex-start"]}`}>
            <SubscriptionCard
              cycle="Monthly"
              highlite="Switch to annual and save $200"
              highliteStyle={subscription["text-black"]}
              price="$12.00"
              billing="Billed Monthly"
            />

            <SubscriptionCard
              flag={layout.active}
              cycle="Annual"
              highlite="Annual discount applied!"
              highliteStyle={subscription["text-highlight"]}
              price="$10.00"
              billing="Billed $1000 Annually"
            />

            <VoiceUsageCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SubscriptionCycle;
