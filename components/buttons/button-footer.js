import React, {Component} from "react";
import Button from './button'
import layout from '../../styles/layout.module.scss'

class ButtonFooter extends Component {
	render() {
		return (
            <div className={`${layout['footer-btn-theme']} ${layout['theme-padding']}`}>
                <div className={`${layout.container} ${layout.grid} ${layout['align-center']}`}>
                    <div className={layout.row}>
                    <Button color='btn-white' size='btn-big' text='Back' />
                    <Button color='btn-orange' size='btn-big' text='Continue' />
                    </div>
                </div>
            </div>
		  );
	}
}

export default ButtonFooter;