// @flow
import styles from "./Home.css";
import {Component} from "react";
import {Link} from "react-router";
import {default as Video, Overlay} from 'react-html5video';
import Reviews from "../../components/Reviews";
import Modal from "../../components/Modal";

class Home extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false
        }
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
                        <source src={require("./video/fishart_showreel_2015.webm")} type="video/webm"/>
                        <source src={require("./video/fishart_showreel_2015.ogv")} type="video/ogv"/>
                        <source src={require("./video/fishart_showreel_2015.mp4")} type="video/mp4"/>
                        <Overlay />
                    </Video>
                    <div className={styles.previewPortfolio}>
                        <div className={styles.previewVideo1} onClick={() => this.showModal(196883323)}></div>
                        <div className={styles.previewVideo2} onClick={() => this.showModal(154054283)}></div>
                        <div className={styles.previewVideo3} onClick={() => this.showModal(178455113)}></div>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <a href="/portfolio" className={styles.buttonOrange}>
                            ПЕРЕЙТИ В ПОРТФОЛИО
                        </a>
                    </div>
                    <div className={styles.reviewsWrapper}>
                        <Reviews />
                    </div>
                </div>
                {this.state.showModal && this.renderModal()}
            </div>
        );
    }

    renderModal() {
        let url = `https://player.vimeo.com/video/${this.state.id}?badge=0&title=0&byline=0&autopause=1`;
        return <Modal
            onClose={this.hideModal}
            showShadow={true}
            showClose={true}
        >
            <div className={styles.previewVideo}>
                <iframe
                    src={url}
                    frameBorder="0"
                    title={name}
                    allowFullScreen=""></iframe>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonOrange} onClick={this.hideModal}>
                    Закрыть
                </button>
            </div>
        </Modal>
    }

    showModal = (id: number) => {
        this.setState({
            showModal: true,
            id
        })
    };

    hideModal = () => {
        this.setState({
            showModal: false,
            id: null
        })
    }
}

export default Home;
