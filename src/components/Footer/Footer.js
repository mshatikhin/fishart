import styles from "./Footer.css";

const Footer = () => <div className={styles.footerWrap}>
    <div className={styles.delimeter}></div>
    <div className={styles.footer}>
        <div className={styles.corporate}>
            Fish Art
        </div>
        <div className={styles.call}>
            <div className={styles.header}>Позвонить</div>
            <div className={styles.contact}>
                <a href="tel:+79120304300">+7 912 030-43-00&nbsp;&nbsp;&nbsp;Ульяна Рыбина</a></div>
            <div className={styles.contact}>
                <a href="tel:+79068010008">+7 906 801-00-08&nbsp;&nbsp;&nbsp;Артём Авдеев</a></div>
        </div>
        <div className={styles.write}>
            <div className={styles.header}>Написать</div>
            <div className={styles.contact}>
                <a href="//vk.com/fishart_video" target="blank">
                    <div className={styles.vk}></div>
                    vk.com/fishart_video
                </a>
            </div>
            <div className={styles.contact}>
                <a href="//facebook.com/profile.php?id=100010467722687" target="blank">
                    <div className={styles.facebook}></div>
                    facebook.com/fishart_video
                </a>
            </div>
        </div>
        <div className={styles.look}>
            <div className={styles.header}>Посмотреть</div>
            <div className={styles.contact}>
                <a href="//instagram.com/fishart_video/" target="blank">
                    <div className={styles.instagram}></div>
                    fishart_video
                </a>
            </div>
            <div className={styles.contact}>
                <a href="//vimeo.com/fishart" target="blank">
                    <div className={styles.vimeo}></div>
                    fishart
                </a>
            </div>
        </div>
    </div>
</div>;

export default Footer;