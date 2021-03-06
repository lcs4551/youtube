import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css'

const VideoList = (props) => (
  <ul className={style.videos}>
    {props.videos.map(video => <VideoItem id={video.id} video={video}/>)}
  </ul>
);

export default VideoList;