import { Component, Fragment } from 'react';
import axios from 'axios'


class VideoList extends Component {

    constructor(props) {
        super(props)

        this.state = {
        videoList: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:4000/api/files', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            this.setState({
            videoList: res.data
            })
        })
    }


    render() {

        const videos = this.state.videoList.map(video => {
            return (
                <div className="video col-xs-12 col-sm-12 col-md-3 col-lg-4" key={video._id}>
                    <a href={video.video_path}>
                        <div className="video-thumbnail">
                            <img src={video.thumbnail_path} alt="video thubmnail" />
                        </div>
                    </a>
                    <span className="video-title">{video.upload_title.replace(/_/g, ' ')}</span>
                </div>
            )
        })

        return (
            <Fragment>
                <div className="container mt-5">
                    <h4>Videos</h4>
                    <hr className="my-4" />

                    <div className="streams row">
                        {videos}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default VideoList
