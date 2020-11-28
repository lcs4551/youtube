import React from 'react';
import style from './video_item.module.css';

const VideoItem = (props) => (
      <li className={style.container}>
        <div className={style.video}>
          <img 
          className={style.thumbnail} 
          src={props.video.snippet.thumbnails.medium.url} 
          alt="thubnail image" />
          <div className={style.metaData}>
            <p className={style.title}>{props.video.snippet.title}</p>
            <p className={style.channelTitle}>{props.video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
  );

export default VideoItem;