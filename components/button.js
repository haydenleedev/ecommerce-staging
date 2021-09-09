import React from "react";
import button from '../styles/buttons.module.scss'

const Button = (props) => {
    return (
        <React.Fragment>
                <button className={`${button['btn']} ${button[`${props.color}`]} ${button[`${props.size}`]}` }><span>{props.text}</span></button>
        </React.Fragment>
    );
}

export default Button;