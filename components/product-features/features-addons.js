import React, {Component} from "react";
import * as svgComponent from '../icons';
import includes from './features-include.module.scss'
import icons from '../buttons/buttons.module.scss'

class ProductFeaturesAddons extends Component {
	render() {
		return (
				<div id="addons-basic" className={`${includes.feature} ${includes.addons}`}>
					<p className={includes['feature-header']}>
						Add-Ons
					</p>
					<ul className={includes['feature-list']}>
						<li>
                        <svgComponent.IconCheck/>
							<span>Chat</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 Provides the ability for customers and agents to communicate through a web or mobile-based messaging experience originating from a company website or mobile app using the UJET mobile SDK
								</span>
							</span>
						</li>
						<li>
                        <svgComponent.IconCheck/>
							<span>SMS (Includes SMS blending, Smart Actions, &amp; two-way SMS channel)</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 The SMS channel enables two-way text communication between a consumer and agent. The SMS channel also enables SMS blending.
								</span>
							</span>
						</li>
						<li>
                        <svgComponent.IconCheck/>
							<span>Conversational IVR</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 Speech-enabled IVR using natural language processing and conversational AI
								</span>
							</span>
						</li>
					</ul>
				</div>
		  );
	}
}

export default ProductFeaturesAddons;