import React from 'react';
import Loading from './Loading';

function VideoDetail({ video }) {
    if (!video) {
        return <Loading />
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={video.snippet.title} className="embed-responsive-item" src={url} />
            </div>
            <div className="details">
                <div style={{ fontWeight: 'bold'}}>{video.snippet.title}</div>
                <div style={{ fontWeight: 'lighter'}}>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
