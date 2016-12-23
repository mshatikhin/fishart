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
                <div className={styles.socials}>
                    <Socials />
                </div>
                <div className={styles.headerWrapper}>
                    <Link to="/" className={styles.logoLink}>
                        <img src={require("./images/logo.png")} className={styles.logo} title="" alt=""/>
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
