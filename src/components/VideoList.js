import React from 'react';
import VideoListItem from './VideoListItem';
import { ListGroup } from 'reactstrap';

const VideoList = (props) => {

    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            <ListGroup>{VideoItems}</ListGroup>
        </ul>
    );
};
export default VideoList;