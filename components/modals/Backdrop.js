import modal from "./modal.module.scss";

const Backdrop = (props) => {
  return <div className={modal.backdrop} onClick={props.onCancel} />;
};

export default Backdrop;
