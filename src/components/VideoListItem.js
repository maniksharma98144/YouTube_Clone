import React from 'react';
import { ListGroupItem, Media } from 'reactstrap';

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
        <ListGroupItem className="list-group-item">
            <Media onClick={() => { onVideoSelect(video) }}>
                <Media left>
                    <Media object
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.thumbnails.default.url} />
                </Media>
                <Media body>
                    <Media heading>
                        {video.snippet.title}
                    </Media>
                </Media>
            </Media>
        </ListGroupItem>
    );
}

export default VideoListItem;