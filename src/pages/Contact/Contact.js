// @flow
import React, {Component} from "react";
import styles from "./Contact.css";

export default class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.about}>
                <div className={styles.card}>
                    <article className={styles.article}>
                        <h3>Приветствуем Вас на нашем сайте!</h3>
                        <p>
                            Давайте знакомиться, мы — Артем Авдеев и Ульяна Рыбина, основатели студии «Fish art».
                        </p>
                        <p>
                            В жизни мы не просто творческий тандем, мы — брат и сестра, а это значит, что мы дополняем
                            друг друга и понимаем на интуитивном уровне. Для совместной работы это бесценные качества.
                        </p>
                        <p>
                            Видеография для нас — хобби и любимая работа, которой мы живем. Мы точно знаем — видео о
                            вашем событии сможет лучше всего передать краски и эмоции долгожданного дня, поэтому мы
                            создаем особенные фильмы, которые будут хранить ваши незабываемые воспоминания.
                        </p>
                        <p>
                            Эти кадры вы захотите показать вашим детям и даже внукам! Мы всегда ищем новые горизонты для
                            нашего творчества.
                        </p>
                        <p>
                            г. Екатеринбург<br/><br/>
                            <a className={styles.link} href="mailto:mail@fishart-video.com"><img src={require("./images/mail.ico")} className={styles.telIcon} width={16} height={16} />&nbsp;mail@fishart-video.com</a><br/><br/>
                            <div>
                                <a className={styles.link} href="tel:+79120304300"><img src={require("./images/tel.png")} className={styles.telIcon} width={16} height={16} />&nbsp;+7 912 030-43-00   Ульяна Рыбина</a><br/>
                                <a className={styles.link} href="tel:+79068010008"><img src={require("./images/tel.png")} className={styles.telIcon} width={16} height={16} />&nbsp;+7 906 801-00-08   Артём Авдеев</a>
                            </div>
                        </p>
                    </article>
                </div>
            </div>
        );
    }
}
