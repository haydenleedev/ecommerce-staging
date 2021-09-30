import ImplementationCard from "./implementation-card";
import BasicImplementation from "./basic-implementation";
import React, { Component } from "react";
import implementation from "./implementation.module.scss";
import layout from "../../styles/layout.module.scss";

class Implementation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={implementation["form-title-wrap"]}>
          <span className={implementation.number}>2</span>
          <h2 className={implementation["form-title"]}>
            Implementation Services
          </h2>
        </div>
        <div className={implementation["mlr-30px"]}>
          <div className={layout.row}>
            <BasicImplementation />
          </div>
          <div className={layout.row}>
            <ImplementationCard
              title="Standard"
              price="$15,000"
              selected={implementation.active}
            />

            <ImplementationCard title="Advanced" price="$27,000" />
            <ImplementationCard
              title="Standard"
              price="$15,000"
              disabled={implementation.disabled}
            />
            <ImplementationCard
              title="Advanced"
              price="$27,000"
              disabled={implementation.disabled}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Implementation;
