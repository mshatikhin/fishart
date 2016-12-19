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
                            <td>Предварительная встреча перед свадьбой</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Работа двух операторов на свадьбе</td>
                            <td>8 часов</td>
                            <td>10 часов</td>
                            <td>12 часов</td>
                        </tr>
                        <tr className={styles.emptyRow}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Монтаж свадебного клипа (3-4 мин)</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr>
                            <td>Монтаж тизера для инстаграм (15 сек)</td>
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
                            <td>Запись исходного видео на носитель клиента</td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                            <td><span className={styles.green} title="Включено в пакет"></span></td>
                        </tr>
                        <tr className={styles.emptyRow}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Монтаж свадебного фильма</td>
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
                        </tbody>
                    </table>
                </div>
                {/*<div className={styles.advantages}>*/}
                    {/*<h1 className={styles.advantagesHeader}>Наши преимущества</h1>*/}
                    {/*<div></div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Services;