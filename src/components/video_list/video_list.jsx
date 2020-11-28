import React from 'react';
import VideoItem from '../video_item/video_item';


const VideoList = (props) => (
  <ul>
    {props.videos.map(video => <h1><VideoItem id={video.id} video={video}/></h1>)}
  </ul>
);

export default VideoList;