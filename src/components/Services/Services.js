import React, {Component} from "react";
import styles from "./Services.css";

class Services extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Перечень услуг</th>
                            <th>Стандарт</th>
                            <th>Полный день</th>
                            <th>Всё включено</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Предварительная встреча</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Фирменная коробочка с флешкой</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Работа двух операторов</td>
                            <td>10 часов</td>
                            <td>10 часов</td>
                            <td>Полный день</td>
                        </tr>
                        <tr>
                            <td>Монтаж свадебного клипа (3-4 мин)</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Запись исходного видео на носитель клиента</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Монтаж свадебного фильма (15-30мин)</td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Монтаж тизера для инстаграм (30-60сек)</td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Предсвадебная съемка</td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Монтаж клипа «love story» и показ в день свадьбы</td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.grey} title="Не входит в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.additional}>
                    <div className={styles.additionalHeader}>Дополнительные услуги</div>
                    <div className={styles.additionalServices}>Монтаж банкета (1-1.5 часа) <span className={styles.hint}>* только для пакета стандарт</span></div>
                    <div className={styles.additionalServices}>Съемка “Love Story”</div>
                    <div className={styles.additionalServices}>Экспресс монтаж</div>
                </div>
                <div className={styles.advantages}>
                    <h1 className={styles.advantagesHeader}>Наши преимущества</h1>
                    <div className={styles.advantagesImages}>
                        <div className={styles.advantagesImageWrap}>
                            <div className={styles.advantagesImageModern}></div>
                            <div>Современное съемочное оборудование</div>
                        </div>
                        <div className={styles.advantagesImageWrap}>
                            <div className={styles.advantagesImageAudio}></div>
                            <div>Профессиональная запись звука</div>
                        </div>
                        <div className={styles.advantagesImageWrap}>
                            <div className={styles.advantagesImageAuto}></div>
                            <div>Съемочная группа на своем авто</div>
                        </div>
                        <div className={styles.advantagesImageWrap}>
                            <div className={styles.advantagesImageWorld}></div>
                            <div>Возможны заграничные съемки</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;