import React, {Component} from "react";
import styles from "./Menu.css";
import {Link} from "react-router";
import Socials from "../Socials";

const MenuLink = ({url, title}) => <Link className={styles.link} activeClassName={styles.activeLink} to={url}>
    {title}
</Link>;

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <MenuLink url="/home" title="ГЛАВНАЯ"/>
                <MenuLink url="/portfolio" title="ПОРТФОЛИО"/>
                <MenuLink url="/services" title="УСЛУГИ"/>
                <MenuLink url="/contact" title="КОНТАКТЫ"/>
                <div className={styles.socials}>
                    <Socials />
                </div>
            </nav>
        );
    }
}
