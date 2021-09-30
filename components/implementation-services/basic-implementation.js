import React, { Component } from "react";
import implementation from "./implementation.module.scss";
import layout from "../../styles/layout.module.scss";
import form from "../form/form.module.scss";

class BasicImplementation extends Component {
  render() {
    return (
      <div className={layout.col}>
        <div className={`${layout.inner}  ${layout["bg-lightgray"]}`}>
          <h3 className={implementation["implementation-title"]}>
            Basic Implementation Service
          </h3>
          <p className={implementation["text-26px"]}>$0</p>
          <p
            className={`${implementation["text-medium"]} ${implementation["mt-15px"]}`}
          >
            Each plan includes Up to (5) hours of design consultation,
            Configuration of up to (2) queues (1 language), Settings
            configuration, Standard CRM integration, and Administration
            Training. Add more Implementation Service Option By Selecting One of
            the Options Below.
          </p>

          <div className={implementation["checkbox-wrap"]}>
            <label htmlFor="disable" className={form.booleancheckbox}>
              <input id="disable" type="checkbox" name="disable" value="true" />
              <span className={form.check}>
                No thanks. I'm fine with Basic implementation service.
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export default BasicImplementation;
