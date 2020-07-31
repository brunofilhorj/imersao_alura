import React from 'react';
import { connect } from 'react-redux';

import { VideoCardContainer } from './styles';

import { scrollToTop } from '../../../../utils/common';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor, dispatch }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  function setCurrentVideo(videoTitle, videoURL) {
    dispatch({ type: 'SET_CURRENT_VIDEO', payload: { videoTitle, videoURL } })
    scrollToTop();
  }

  return (
    <VideoCardContainer
      url={image}
      // href={videoURL}
      // target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      onClick={() => setCurrentVideo(videoTitle, videoURL)}
    />
  );
}

export default connect()(VideoCard);