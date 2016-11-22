// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";
import {connect} from "react-redux";
import Loader from "../../components/Loader";
import {VimeoArtemUserId, VimeoUlianaUserId, VimeoClientId, VimeoClientSecret} from "../../utils/util";
import {videosRequest, updateVideos} from "../../redux/actions/vimeoActions";

const propTypes = {
    albums: PropTypes.any
};

class PortfolioContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onVideoRequest([VimeoArtemUserId, VimeoUlianaUserId], VimeoClientId, VimeoClientSecret);
    }

    renderVideo({uri, name}){
        let url = `https://player.vimeo.com${uri.replace("/videos/","/video/")}?badge=1&title=0&byline=0&autopause=1`;
        return <div className={styles.card}>
            <iframe
                width={500}
                height={281}
                src={url}
                frameBorder="0"
                title={name}
                allowFullScreen=""></iframe>
        </div>
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.videos.length == 0 ? <Loader /> : this.props.videos.map(this.renderVideo)}
            </div>
        );
    }
}
PortfolioContainer.propTypes = propTypes;

const mapStateToProps = (store) => {
    let {videos} = store.videos;
    return {
        videos: videos || []
    }
};

export default connect(mapStateToProps, {
    onUpdateVideos: updateVideos,
    onVideoRequest: videosRequest
})(PortfolioContainer);