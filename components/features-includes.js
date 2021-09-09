import React, {Component} from "react";
import * as svgComponent from '../components/icons';
import includes from '../styles/features-include.module.scss'
import icons from '../styles/buttons.module.scss'

class ProductFeaturesIncludes extends Component {
	render() {
		return (
				<div id="feature-basic" className={includes.feature}>
					<p className={includes['feature-header']}>
						Includes
					</p>
					<ul className={includes['feature-list']}>
						<li>
						<svgComponent.IconCheck/>
							<span>PSTN Voice</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 Support for inbound calls over the PSTN as well as outbound calling via the agent dialpad or click-to-call within the CRM.
								</span>
							</span>
						</li>
						<li>
						<svgComponent.IconCheck/>
							<span>Standard Reports &amp; Dashboards</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 Includes access to (13) pre-configured reports, dashboards, and monitoring pages with standard visualization and filtering tools.
								</span>
							</span>
						</li>
						<li>
						<svgComponent.IconCheck/>
							<span>Single Sign-On</span>
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 The SSO feature allows customers to login using their corporate credentials managed by their internal identity management system using SAML 2.0
								</span>
							</span>
						</li>
					</ul>
				</div>
		  );
	}
}

export default ProductFeaturesIncludes;