import React, {Component} from "react";
import * as svgComponent from '../icons';
import compare from './comparison-chart.module.scss'

class TableContent extends React.Component {

	render() {

		return (
            <React.Fragment>
            <div className={`${compare['table-row']} ${compare.nowrap} ${compare['table-cat']}`}>
                <div className={`${compare['table-th']}`}>
                <h4>{this.props.header}</h4>
                </div>
            </div>
            <div className={compare['table-body']}>
                <div className={compare['table-row']}>
                    <div className={compare['table-td']}>
                    <p>SMS Blending</p>
                    </div>
                    <div className={compare['table-td']}>
                    <svgComponent.IconX/>
                    </div>
                    <div className={compare['table-td']}>
                    <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                </div>
                <div className={compare['table-row']}>
                    <div className={compare['table-td']}>
                    <p>Standard Reports & Dashboards</p>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                    <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                </div>
                <div className={compare['table-row']}>
                    <div className={compare['table-td']}>
                    <p>Single Sign-On</p>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                    <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                </div>
                <div className={compare['table-row']}>
                    <div className={compare['table-td']}>
                    <p>CRM Adapters</p>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                    <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                    <div className={compare['table-td']}>
                        <svgComponent.IconCheck/>
                    </div>
                </div>
            </div>
            </React.Fragment>
		  );
	}
}

export default TableContent;