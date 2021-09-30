import React, { Component } from "react";
import layout from "styles/layout.module.scss";
import button from "./buttons.module.scss";
import Modal from "../modals/add-on-modal";
import Button from "./button";

class ButtonFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    console.log("Close");
    this.setState({ showModal: false });
  }

  onConfirm() {
    console.log("Confirm");
    this.setState({ showModal: false });
  }

  onCancel() {
    console.log("Cancel");
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div
        className={`${button["modal-footer-btn-theme"]} ${layout["theme-padding"]}`}
        ref={(node) => {
          this.node = node;
        }}
      >
        <div
          className={`${layout.container} ${layout.grid} ${layout["align-center"]}`}
        >
          <div className={`${layout.row} ${layout["justify-center"]}`}>
            <Button color="btn-white" size="btn-big" text="Skip This Step" />
            <Button
              color="btn-orange"
              size="btn-big"
              text="Next"
              onClick={this.showModal}
            />
          </div>
        </div>
        {this.state.showModal ? (
          <Modal
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
            onClose={this.closeModal}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ButtonFooter;
