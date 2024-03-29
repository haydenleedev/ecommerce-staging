import React, { Component } from "react";
import FreeTrialContent from "./free-trial-content";
import includes from "../packages/features-include.module.scss";
import free from "./free-trial.module.scss";

class FreeTrial extends Component {
  render() {
    return (
      <div className={`${includes.feature} ${free["mb-20px"]}`}>
        <h2>Try for Free!</h2>
        <ul className={`${includes["feature-list"]} ${free["grid-row-3"]}`}>
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
          <FreeTrialContent />
        </ul>
      </div>
    );
  }
}

export default FreeTrial;
