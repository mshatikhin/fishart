// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";
import {VimeoVideoIds} from "../../utils/util";

const propTypes = {
    albums: PropTypes.any
};

class PortfolioContainer extends Component {

    constructor(props) {
        super(props);
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
                            title={name}
                            allowFullScreen=""></iframe>
                    </div>
                })}
            </div>
        );
    }
}
PortfolioContainer.propTypes = propTypes;

export default PortfolioContainer;