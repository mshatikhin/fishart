import React, {Component} from "react";
import styles from "./Socials.css";

export default class Socials extends Component {
    render(){
        return <div className={styles.soc}>
            <a href="https://vk.com/fishart_video" target="blank">
                <div className={styles.vk}></div>
            </a>
            <a href="//facebook.com/profile.php?id=100010467722687" target="blank">
                <div className={styles.facebook}></div>
            </a>
            <a href="//instagram.com/fishart_artem/" target="blank">
                <div className={styles.instagram}></div>
            </a>
            <a href="//vimeo.com/artzoom" target="blank">
                <div className={styles.vimeo}></div>
            </a>
        </div>
    }
}