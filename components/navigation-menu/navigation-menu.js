import Head from 'next/head'
import React, {Component} from "react";
import Link from 'next/link';
import MenuList from './navigation-menu-list';
import nav from './nav.module.scss'

const mainNavs = [
    {
        id: 'm1',
        main_menu: 'Why UJET',
        href: 'why-ujet',
        dropdowns: [
            {sub_menu: [{
                sub_item: 'Why UJET',
                sub_href: '/why-ujet/',
                dropdown_items: [
                    {dropdown_menu:'Embeddable Experience', dropdown_href: '/embeddable-experience/'},
                    {dropdown_menu:'Purpose-Built for the CRM', dropdown_href: '/purpose-built-for-the-crm/'},
                    {dropdown_menu:'Intelligence &amp; Automation', dropdown_href: '/intelligence-automation/'},
                    {dropdown_menu:'Ultra-Modern Enterprise Cloud', dropdown_href: '/ultra-modern-enterprise-cloud/'}
                ]
            }]}
        ]
    },
    {
        id: 'm2',
        main_menu: 'Platform',
        href: '/overview/',
        dropdowns: [
            {sub_menu: [
                {sub_item: 'Product Overview', sub_href: '/overview/'}
                ]},
            {sub_menu: [{
                sub_item: 'Digital &amp; Voice Channels',
                sub_href:'/digital-voice-channels/',
                dropdown_items: [
                    {dropdown_menu:'Voice', dropdown_href: '/digital-voice-channels/#voice'},
                    {dropdown_menu:'Chat', dropdown_href: '/digital-voice-channels/#chat'},
                    {dropdown_menu:'SMS', dropdown_href: '/digital-voice-channels/#sms'},
                    {dropdown_menu:'Smart Actions', dropdown_href: '/digital-voice-channels/#smart-actions'}
                    ]
                 }]},
            {sub_menu: [
                {sub_item: 'Virtual Agent', sub_href: '/virtual-agent/'}
                ]},
            {sub_menu: [
                {sub_item: 'Integrations', sub_href: '/contact-center-software-integrations/'}
                ]},
            {sub_menu: [
                {sub_item: 'Remote Agents', sub_href: '/remote-work-from-home-solution/'}
                ]},
            {sub_menu: [
                {sub_item: 'Packages', sub_href: '/pricing/ujet-packages/'}
                ]}
        ]
    },
    {
        id: 'm3',
        main_menu: 'Customers',
        href: '/customerstories/',
        dropdowns: [
            {sub_menu: [
                {sub_item: 'Customer Stories', sub_href: '/customerstories/'}
                ]}
        ]
    },
    {
        id: 'm4',
        main_menu: 'Resources',
        href: 'why-ujet',
        dropdowns: [
            {sub_menu: [{
                sub_item: 'Guides & Reports',
                sub_href: '/resources/',
                dropdown_items: [
                    {dropdown_menu:'Guides & Reports', dropdown_href: '/resources/#guides-and-reports'},
                    {dropdown_menu:'e-Books & White Papers', dropdown_href: '/resources/#whitepapers-and-ebooks'},
                    {dropdown_menu:'Product Datasheets', dropdown_href: '/resources/#integration-guides'},
                    {dropdown_menu:'Videos & Webinars', dropdown_href: '/resources/#webinars'},
                    {dropdown_menu:'Blog', dropdown_href: '/blog'}
                ]
            }]}
        ]
    },
    {
        id: 'm4',
        main_menu: 'Company',
        href: '/about-us/',
        dropdowns: [
            {sub_menu: [{
                sub_item: 'About Us',
                sub_href: '/about-us/',
            }]},
            {sub_menu: [{
                sub_item: 'Events',
                sub_href: '/events/',
            }]}
            ,
            {sub_menu: [{
                sub_item: 'Leadership',
                sub_href: '/leadership/',
            }]},
            {sub_menu: [{
                sub_item: 'Partners',
                sub_href: '/partners/',
            }]},
            {sub_menu: [{
                sub_item: 'Newsroom',
                sub_href: '/press/',
            }]},
            {sub_menu: [{
                sub_item: 'Awards',
                sub_href: '/awards/',
            }]},
            {sub_menu: [{
                sub_item: 'Careers',
                sub_href: '/careers/',
            }]}
        ]
    },
];

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
                <MenuList primary_menus={mainNavs} />
            </nav>
      </header>
      </React.Fragment>
        )
    }
}

export default NavigationMenu;