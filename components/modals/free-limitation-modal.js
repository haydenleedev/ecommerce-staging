import modal from "./modal.module.scss";
import Button from "components/buttons/button";
import ButtonFooter from "components/buttons/add-on-button-footer";
import layout from "../../styles/layout.module.scss";
const FreeLimitationModal = () => {
  return (
    <div className={`${modal.modal} ${modal.narrow}`}>
      <p className={modal["section-title"]}>Limitations with Free Plan</p>

      <ul className={modal["w-500px"]}>
        <li>Voice limited to 5,000 US domestic minutes per month</li>
        <li>(2) local or toll-free phone numbers ($35 / month)</li>
        <li>Maximum of 100 SMS messages ($1 / month)</li>
        <li>Maximum of 100 Chats / month ($1 / month)</li>
        <li>No CCAI</li>
        <li>90 days of platform usage only</li>
        <li>
          <strong>No support other than starter implementation</strong>
        </li>
      </ul>
      <div className={`${layout["theme-padding"]}`}>
        <div
          className={`${layout.container} ${layout.grid} ${layout["align-center"]}`}
        >
          <div className={`${layout.row} ${layout["justify-center"]}`}>
            <Button
              color="btn-blue"
              size="btn-small"
              text="No, I want to select a different plan"
              padding="mlr-7px"
            />
            <Button
              color="btn-orange"
              size="btn-small"
              text="Yes, let's get started!"
              padding="mlr-7px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLimitationModal;
