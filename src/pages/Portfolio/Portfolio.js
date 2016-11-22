// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";
import {connect} from "react-redux";
import Loader from "../../components/Loader";
import {VimeoArtemUserId, VimeoClientId, VimeoClientSecret} from "../../utils/util";
import {videosRequest, updateVideos} from "../../redux/actions/vimeoActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    albums: PropTypes.any
};

class PortfolioContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(videosRequest(VimeoArtemUserId, VimeoClientId, VimeoClientSecret));
    }

    componentWillUnmount() {
        this.props.dispatch(updateVideos([]));
    }

    render() {
        return (
            <div className={styles.main}>
                {this.props.videos.length == 0 ? <Loader /> :
                    this.props.videos.map((video, index) => <div
                        key={index}
                        className={styles.imgWrap}
                    >
                    </div>)}
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

export default connect(mapStateToProps)(PortfolioContainer);