// @flow

import styles from "./Header.css";
import Menu from "../Menu/Menu";
import Socials from "../Socials/Socials";
import {Link} from "react-router";
import React, {Component} from "react";

export default class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.logoLink}>
                        <div className={styles.logoText}>Fish Art</div>
                    </Link>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
}
