import React, { Component } from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import _ from 'lodash';

const API_KEY = "AIzaSyCk2GvKHAPrWj0KlGgYxP6M3Y_DxAfA8OI";
const logo = "././assets/logo.png";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const VideoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div className="container">
                <div className="row">
                    <a href="www.youtube.com">
                        <img src={logo} alt="YotTube" height={100} width={250} style={{ paddingTop: 20 }} />
                    </a>
                    <SearchBar onSearchTermChange={VideoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={(selectedVideo) => this.setState({ selectedVideo: selectedVideo })}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        )
    }
}
export default Main;