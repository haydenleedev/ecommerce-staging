import React from "react";
import Link from 'next/link';
import nav from './nav.module.scss'

const MenuList = (props) => {
    const url = 'https://ujet.cx';
   return  (
    <ul className={`${nav.menu} ${nav.items}`} >
      {props.primary_menus.map((primary_menu, Index) => (
            
                <li key={primary_menu.id} className={nav['has-dropdown']}>
                    <Link href={primary_menu.href ? (url + primary_menu.href) : '#'} passHref><a>{primary_menu.main_menu}</a></Link>
                    <ul>
                        {primary_menu.dropdowns.map((dropdown, dropdownIndex) => (       
                            dropdown.sub_menu.map((secondary_menu, secondIndex) => (
                                <li key={secondIndex}>
                                <Link href={secondary_menu.sub_href ? (url + secondary_menu.sub_href) : '#'} passHref><a>{secondary_menu.sub_item}</a></Link>
                                    <ul>
                                        {
                                        secondary_menu.dropdown_items && secondary_menu.dropdown_items.map((third_menu, thirdIndex) => (
                                            <li key={thirdIndex}>
                                                <Link href={third_menu.dropdown_href ? (url + third_menu.dropdown_href) : '#'} passHref><a>{third_menu.dropdown_menu}</a></Link>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </li>
                            ))
                                
                        ))}
                    </ul>
                </li>
         ))}
         </ul>
         )
         
}

export default MenuList;