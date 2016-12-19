import React, {Component} from "react";
import Header from "../Header/Header";
import styles from "./Footer.css";
import Socials from "../Socials";

const Footer = () => <div className={styles.footer}>
    <div className={styles.corporate}>FishArt ©</div>
    <div className={styles.contacts}>
        <span className={styles.contact}><a href="tel:+79120304300">+7 912 030-43-00 Ульяна Рыбина</a></span>
        <span className={styles.contact}><a href="tel:+79068010008">+7 906 801-00-08 Артём Авдеев</a></span>
    </div>
    <div className={styles.socials}>
        <Socials />
    </div>
</div>;

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
