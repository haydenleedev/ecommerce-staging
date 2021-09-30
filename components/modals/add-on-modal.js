import AddOnCard from "components/cards/add-on-card";
import modal from "./modal.module.scss";
import ButtonFooter from "components/buttons/add-on-button-footer";
import configureProduct from "components/configure-products/configure-products.module.scss";
const AddOnModal = () => {
  return (
    <div className={modal.modal}>
      <p className={`${modal["section-title"]} ${modal["col-3"]}`}>
        Interested in Add ons?
      </p>

      <div className={configureProduct["mlr-30px"]}>
        <div className={modal.row}>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option1" text="Add on 1" />
          </div>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option2" text="Add on 2" />
          </div>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option3" text="Add on 3" />
          </div>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option4" text="Add on 4" />
          </div>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option5" text="Add on 5" />
          </div>
          <div className={`${modal.col} ${modal["col-3"]}`}>
            <AddOnCard option="option6" text="Add on 6" />
          </div>
        </div>
      </div>

      <ButtonFooter />
    </div>
  );
};

export default AddOnModal;
