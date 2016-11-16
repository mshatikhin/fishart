import React, {Component} from "react";
import styles from "./Menu.css";
import { Link } from "react-router";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/home">ГЛАВНАЯ</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/portfolio">ПОРТФОЛИО</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/services">УСЛУГИ</Link>
                <Link className={styles.link} activeClassName={styles.activeLink} to="/contact">КОНТАКТЫ</Link>
            </nav>
        );
    }
}
