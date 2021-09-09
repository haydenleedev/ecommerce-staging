import Head from 'next/head'
import React, {Component} from "react";
import DropdownMenu from './navigation-dropdown';
import DropdownMenuHead from './navigation-dropdown-head';

import nav from 'styles/nav.module.scss'
import Link from 'next/link'

class NavigationMenu extends Component { 
    render () {
        const headMenue = this.props.headMenu;
        const menue = this.props.menu;
        return (
            <React.Fragment>
            <input type="checkbox" id="menustate"  className={nav.menustate} tabIndex="-1" aria-hidden="true"></input>
            <header className={nav.stick} id={nav.stick}>
            <nav className={`${nav['primary-nav']} ${nav['sticky-wrap']}`}>

            <ul className={nav['mobile-menu']}>
                <li className={nav.menuicon}>
                    <label className={nav['menuicon-label']} htmlFor="menustate" aria-hidden="true">
                    <span>Mobile Menu</span>
                    </label>           
                </li>
            </ul>
                <ul className={nav.menu}>
                    <li className={nav.logo}>
                    <Link href='#' passHref>
                    <a>UJET.cx, the world’s first and only CCaaS 3.0 cloud contact center provider.</a>
                    </Link>
                    </li>
                </ul>
                <ul className={`${nav.menu} ${nav.items}`}>
                    <li className={nav['has-dropdown']}>
                     <Link href='#' passHref>
                        <a>Why UJET</a>
                     </Link>
                        <ul>
                            <li>
                            <DropdownMenuHead headMenu='Why UJET' />
                                <ul>
                                <DropdownMenu menu='Embeddable Experience' />
                                <DropdownMenu menu='Purpose-Built for the CRM' />
                                <DropdownMenu menu='Intelligence & Automation' />
                                <DropdownMenu menu='Ultra-Modern Enterprise Cloud' />
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={nav['has-dropdown']}>
                    <Link href='#' passHref>
                        <a>Platform</a>
                    </Link>
                        <ul>
                            <li>
                            <DropdownMenuHead headMenu='Product Overview' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Digital & Voice Channels' />
                                <ul>
                                <DropdownMenu menu='Voice' />
                                <DropdownMenu menu='Chat' />
                                <DropdownMenu menu='SMS' />
                                <DropdownMenu menu='Smart Actions' />
                                </ul>
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Virtual Agent' /> 
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Integrations' /> 
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Remote Agents' /> 
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Packages' /> 
                            </li>
                        </ul>
                    </li>
                    <li className={nav['has-dropdown']}>
                    <Link href='#' passHref>
                        <a>Customers</a>
                    </Link>
                        <ul>
                            <li>
                            <DropdownMenuHead headMenu='Customer Stories' />
                            </li>
                        </ul>
                    </li>
                    <li className={nav['has-dropdown']}>
                    <Link href='#' passHref>
                    <a>Resources</a>
                    </Link>
                        <ul>
                            <li>
                            <DropdownMenuHead headMenu='Guides & Reports' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='e-Books & White Papers' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Product Datasheets' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Videos & Webinars' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Blog' />
                            </li>
                        </ul>
                    </li>
                    <li className={nav['has-dropdown']}>
                    <Link href='#' passHref>
                        <a>Company</a>
                    </Link>
                    <ul>
                            <li>
                            <DropdownMenuHead headMenu='About Us' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Events' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Leadership' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Partner with UJET' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Newsroom' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Awards' />
                            </li>
                            <li>
                            <DropdownMenuHead headMenu='Careers' />
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
      </header>
      </React.Fragment>
        )
    }
}

export default NavigationMenu;