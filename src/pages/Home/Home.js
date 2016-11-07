// @flow
import styles from "./Home.css";
import {Component} from "react";
import {connect} from "react-redux";
import {VimeoArtemUserId, VimeoClientId, VimeoClientSecret} from "../../utils/util";
import {videosRequest, updateVideos} from "../../redux/actions/vimeoActions";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(videosRequest(VimeoArtemUserId, VimeoClientId, VimeoClientSecret))
    }

    componentWillUnmount() {
        this.props.dispatch(updateVideos([]));
    }

    render() {

        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                   {this.props.videos.map((video, index) => <div 
                            key={index} 
                            className={styles.imgWrap}                            
                            >                                                                                    
                        </div>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {    
    let {videos} = store.videos;    
    console.log(videos);
    return {
        videos: videos || []
    }
};

export default connect(mapStateToProps)(Home);