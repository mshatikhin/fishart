// @flow
import styles from "./Home.css";
import {Component} from "react";
import Video from "react-html5video";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Video autoPlay loop muted
                           poster={require("./video/poster.png")}
                           onCanPlayThrough={() => {}}
                           className={styles.video}
                    >
                        <source src={require("./video/fishart_showreel_2015.mp4")} type="video/mp4"/>
                        <source src={require("./video/fishart_showreel_2015.ogv")} type="video/ogv"/>
                        <source src={require("./video/fishart_showreel_2015.webm")} type="video/webm"/>
                    </Video>
                </div>
            </div>
        );
    }
}

export default Home;