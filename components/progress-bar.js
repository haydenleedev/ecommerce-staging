import Head from 'next/head'
import React, {Component} from "react";
import * as svgComponent from './icons';
import bar from '../styles/progress-bar.module.scss'
import icon from '../styles/buttons.module.scss'

class ProgressBar extends Component {
    render () {
        return (
            <div className={bar['progress-steps']}>
                <div className={`${bar['progress-step']} ${bar.completed}`}>
                    <div className={bar['header-border']}>
                    <svgComponent.IconCheckCircle/>
                        <div className={bar['header-line']}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Configure Products </span>
                </div>
                <div className={`${bar['progress-step']} ${bar.current}`}>
                <div className={bar['header-border']}>
                    <div className={bar['header-line']}></div>
                        <div className={`${icon.circle} ${icon.blue}`}></div>
                        <div className={`${bar['header-line']} ${bar.active}`}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Subscription Cycle</span>
                </div>
                <div className={bar['progress-step']}>
                    <div className={bar['header-border']}>
                        <div className={bar['header-line']}></div>
                        <div className={icon.circle}></div>
                        <div className={bar['header-line']}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Contact Info</span>
                </div>

                <div className={bar['progress-step']}>
                    <div className={bar['header-border']}>
                        <div className={bar['header-line']}></div>
                        <div className={icon.circle}></div>
                        <div className={bar['header-line']}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Payment Info</span>
                </div>
                <div className={bar['progress-step']}>
                    <div className={bar['header-border']}>
                        <div className={bar['header-line']}></div>
                        <div className={icon.circle}></div>
                        <div className={bar['header-line']}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Review Order</span>
                </div>

                <div className={bar['progress-step']}>
                    <div className={bar['header-border']}>
                        <div className={bar['header-line']}></div>
                        <div className={icon.circle}></div>
                    </div>
                    <span role="heading" aria-level="1" className={bar['step-info']}>Submit</span>
                </div>
            </div>
        )
    }
}

export default ProgressBar;