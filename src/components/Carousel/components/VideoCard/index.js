import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer, VideoCardWrapper } from './styles';

function VideoCard({
  videoTitle, videoURL, categoryColor, videoImage,
}) {
  return (
    <VideoCardWrapper>
      <VideoCardContainer
        url={videoImage}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
      <VideoCardContainer.Title as="a" href={videoURL} target="_blank">
        {videoTitle}
      </VideoCardContainer.Title>
    </VideoCardWrapper>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
  videoImage: PropTypes.string.isRequired,
};

export default VideoCard;
