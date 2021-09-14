import React, {Component, Fragment} from "react";
import icons from '../buttons/buttons.module.scss'

class FreeTrialContent extends Component {
	render() {
		return (
            <React.Fragment>
						<li>
							PSTN Voice
							<span className={icons['tooltip-wrap']}>
								<span className={icons.tooltip}>
									 Support for inbound calls over the PSTN as well as outbound calling via the agent dialpad or click-to-call within the CRM.
								</span>
							</span>
						</li>
            </React.Fragment>
		  );
	}
}

export default FreeTrialContent;