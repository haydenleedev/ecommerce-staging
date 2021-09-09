import Head from 'next/head'
import React, {Component} from "react";
import ProgressBar from './progress-bar';
import bar from 'styles/progress-bar.module.scss'
import nav from 'styles/nav.module.scss'
import Link from 'next/link'

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