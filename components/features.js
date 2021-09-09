import React, {Component} from "react";
import ProductFeaturesIncludes from "./features-includes";
import ProductFeaturesAddons from "./features-addons";
import features from '../styles/features.module.scss'
import styles from '../styles/packages.module.scss'
import Link from 'next/link'

class ProductFeatures extends Component {
	render() {
		return (
        <div>
            <input className={features['accordion-state']} type="checkbox" id="accordion-state-basic"></input>
            <div className={features.product}>
                <label className={features['product-label']} htmlFor="accordion-state-basic">
                    <h3 className={features['feature-title']}>View features</h3>
                </label>
                <Link href="#accordion-state-basic">
                    <a className={`${features['product-anchor']} ${features['product-anchor-open']}`}>
                        <span className={features['product-anchor-label']}>
                            Open Menu
                        </span>
                    </a>
                </Link>
                <Link href="#">
                    <a className={`${features['product-anchor']} ${features['product-anchor-close']}`}>
                        <span className={features['product-anchor-label']}>
                            Close Menu
                        </span>
                    </a>
                </Link>

                <div className={`${features['feature-wrap']} ${features['accordion-body']}`}>
                        <ProductFeaturesIncludes/>
                        <ProductFeaturesAddons/>
                </div>
            </div>
         </div>
		  );
	}
}

export default ProductFeatures;