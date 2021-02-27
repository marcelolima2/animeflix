import React from 'react';
import { VideoCardContainer } from './styles';


function VideoCard({ videoTitle, videoURL, categoryColor, videoImage }) {
  return (
    <VideoCardContainer
      url={videoImage}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
