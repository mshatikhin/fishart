// @flow
import styles from "./Home.css";
import {Component} from "react";
import { default as Video, Overlay } from 'react-html5video';
import Reviews from "../../components/Reviews";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Overlay = () => <div className={styles.overlay}></div>;
        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Video controls autoPlay loop muted
                           poster={require("./video/poster.png")}
                           className={styles.video}
                    >
                        <source src={require("./video/fishart_showreel_2015.mp4")} type="video/mp4"/>
                        <source src={require("./video/fishart_showreel_2015.ogv")} type="video/ogv"/>
                        <source src={require("./video/fishart_showreel_2015.webm")} type="video/webm"/>
                        <Overlay />
                    </Video>
                    <div>
                        <Reviews />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;