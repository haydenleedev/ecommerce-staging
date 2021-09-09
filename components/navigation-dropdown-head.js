import Head from 'next/head'
import React, {Component} from "react";
import nav from 'styles/nav.module.scss'
import Link from 'next/link'

class DropdownMenuHead extends Component {
    render () {
        return (
            <React.Fragment>
                 <Link href='#' passHref>
                    <a>{this.props.headMenu}</a>
                  </Link>
            </React.Fragment>
        )
    }
}

export default DropdownMenuHead;