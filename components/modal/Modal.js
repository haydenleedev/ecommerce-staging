import Button from "../buttons/button";
import layout from '../styles/layout.module.scss'
const Modal = (props) => {

    const cancleHandler = () => {
        props.onCancle();
    }

    const confirmHandler = () => {
        props.onConfirm();
    }

    return (
        <div className={layout.modal}>
            <p>Are you sure?</p>
            <Button color='btn-white' size='btn-big' text='Cancle' />
            <Button color='btn-orange' size='btn-big' text='Confirm' />

        </div>
    )
}

export default Modal;