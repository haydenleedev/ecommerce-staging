import Head from 'next/head'
import React, {Component} from "react";
import Link from 'next/link'

class DropdownMenu extends Component {
    render () {
        return (
            <React.Fragment>
                    <li>
                        <Link href='#' passHref>
                        <a>{this.props.menu}</a>
                        </Link>
                    </li>
            </React.Fragment>
        )
    }
}

export default DropdownMenu;