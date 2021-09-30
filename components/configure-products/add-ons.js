import AddOnCard from "components/cards/add-on-card";
import React, { Component } from "react";
import configureProduct from "./configure-products.module.scss";
import layout from "../../styles/layout.module.scss";

class Addons extends Component {
  render() {
    return (
      <div className={configureProduct["mlr-30px"]}>
        <div className={layout.row}>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option1" text="Add on 1" />
          </div>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option2" text="Add on 2" />
          </div>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option3" text="Add on 3" />
          </div>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option4" text="Add on 4" />
          </div>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option5" text="Add on 5" />
          </div>
          <div className={`${layout.col} ${layout["col-3"]}`}>
            <AddOnCard option="option6" text="Add on 6" />
          </div>
        </div>
      </div>
    );
  }
}
export default Addons;
