import React, {Component} from "react";
import Button from '../buttons/button'
import TableContent from './table-content'
import compare from './comparison-chart.module.scss'

class ComparisonChart extends React.Component {

	render() {
        const color = this.props.color;
        const size = this.props.size;
        const text = this.props.text;
        const header = this.props.header;
		return (
        <div className={compare['compare-table']}>
            <div className={compare['compare-sticky']}>
                <div className={compare['table-row']}>
                    <div className={`${compare['table-th']} ${compare['table-header']}`}>
                        <p>Feature Breakdown</p>
                    </div>
                    <div className={compare['table-th']}>
                        <h3>Free</h3>
                        <Button color='btn-blue' size='btn-small' text='Try Now' />
                    </div>
                    <div className={compare['table-th']}>
                        <h3>Basic</h3>
                        <Button color='btn-blue' size='btn-small' text='Buy Now' />
                    </div>
                    <div className={compare['table-th']}>
                        <h3>Pro</h3>
                        <Button color='btn-blue' size='btn-small' text='Buy Now' />
                    </div>
                    <div className={compare['table-th']}>
                        <h3>Enterprise</h3>
                        <Button color='btn-blue' size='btn-small' text='Buy Now' />
                    </div>
                    <div className={compare['table-th']}>
                        <h3>Digital</h3>
                        <Button color='btn-blue' size='btn-small' text='Buy Now' />
                    </div>
                </div>
            </div>
            <TableContent header='Includes' />
            <TableContent header='Add Ons' />
         </div>
		  );
	}
}

export default ComparisonChart;