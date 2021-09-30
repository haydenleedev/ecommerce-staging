import Link from 'next/link';
import React, { Component } from "react";
import nav from '../navigation-menu/nav.module.scss';
import bar from './progress-bar.module.scss';
import ProgressBar from './progress-bar';

class NavigationStep extends Component {
    render () {
        return (
            <header className={bar['head-wrap']}>
            <div className={`${bar['progress-bar']} ${nav['sticky-wrap']}`}>
                <ul className={nav.menu}>
                    <li className={nav.logo}>
                    <Link href='#' passHref>
                    <a>UJET.cx, the world’s first and only CCaaS 3.0 cloud contact center provider.</a>
                    </Link>
                    </li>
                </ul>
                <ProgressBar />
            </div>
      </header>
        )
    }
}

export default NavigationStep;