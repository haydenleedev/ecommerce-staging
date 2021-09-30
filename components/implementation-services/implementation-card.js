import React, { Component } from "react";
import implementation from "./implementation.module.scss";
import layout from "../../styles/layout.module.scss";

class ImplementationCard extends Component {
  render() {
    return (
      <div className={`${layout.col} ${layout["col-2"]}`}>
        <div
          tabIndex="-1"
          className={`${layout.inner} ${layout["plr-0"]} ${implementation["select-box"]} ${this.props.disabled}`}
        >
          <p className={implementation.hidden}>
            Choose your UJET package implementation cycle
          </p>

          <div className={`${layout["plr-20px"]} ${layout.flex}`}>
            <div className={implementation.radio}>
              <div className={`${implementation["radio-wrap"]}`}>
                <span
                  className={`${implementation["radio-inner"]} ${this.props.selected}`}
                ></span>
              </div>
            </div>
            <div>
              <h3 className={implementation["radio-title"]}>
                {this.props.title}
              </h3>
              <p className={implementation["text-large"]}>
                {this.props.price}
                <span className={implementation["text-suffix"]}>/per year</span>
              </p>
            </div>
          </div>

          <div className={implementation["tag"]}>
            <span>Tag goes here</span>
          </div>

          <div className={`${layout["plr-20px"]}`}>
            <h4 className={layout["pt-20px"]}>Includes:</h4>
            <ul
              className={`${layout.bullets} ${implementation["text-medium"]}`}
            >
              <li>Up to (10) hours of design consultation</li>
              <li>Configuration of up to (20) queues (1 language)</li>
              <li>Settings configuration</li>
              <li>Platform training</li>
              <li>Standard CRM integration</li>
            </ul>
            <h4 className={layout["pt-20px"]}>Add-Ons:</h4>
            <ul
              className={`${layout.bullets} ${implementation["text-medium"]}`}
            >
              <li>Additional queue configuration (up to 30 queues): $7,500</li>
              <li>Additional language configuration: $1,000 per language</li>
              <li>
                Web+Mobile SDK configuration / consulting (up to (10) hours):
                $2,500
              </li>
              <li>RespOrg / Porting: $1,500 per (10) phone numbers</li>
              <li>Reporting Workshop (up to (10) hours): $1,875</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ImplementationCard;
