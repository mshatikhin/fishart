import React, {Component} from "react";
import Header from "../Header/Header";
import styles from "./Footer.css";

const Footer = () => (<div className={styles.footer}>
    <div className={styles.corporate}>FishArt ©</div>
    <div className={styles.contacts}>
        <span className={styles.contact}><a href="tel:+79120304300">+7 912 030-43-00 Ульяна Рыбина</a></span>
        <span className={styles.contact}><a href="tel:+79068010008">+7 906 801-00-08 Артём Авдеев</a></span>
    </div>
    <div className={styles.soc}>
        <a href="https://vk.com/fishart_video" target="blank"><div className={styles.vk}></div></a>
        <a href="https://www.facebook.com/profile.php?id=100010467722687" target="blank"><div className={styles.facebook}></div></a>
        <a href="https://www.instagram.com/fishart_artem/" target="blank"><div className={styles.instagram}></div></a>
    </div>
</div>);

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
