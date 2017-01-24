// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";
import {VimeoVideoIds} from "../../utils/util";

const propTypes = {
    albums: PropTypes.any
};


Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

class PortfolioContainer extends Component {

    constructor(props: any) {
        super(props);
    }

    scrollTo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    toTop = () => {
        this.scrollTo(document.getElementsByTagName("body")[0], 0, 1000);
    }

    render() {
        return (
            <div className={styles.main}>
                {VimeoVideoIds.map(id => {
                    let url = `https://player.vimeo.com/video/${id}?badge=0&title=0&byline=0&autopause=1`;
                    return <div className={styles.card} key={id}>
                        <iframe
                            src={url}
                            frameBorder="0"
                            allowFullScreen=""></iframe>
                    </div>
                })}
                <div>
                    <button
                        type="button"
                        className={styles.topButton}
                        onClick={this.toTop}
                    >
                        Наверх
                    </button>
                </div>
            </div>
        );
    }
}
PortfolioContainer.propTypes = propTypes;

export default PortfolioContainer;
