
import { useState } from 'react';
import './MainVideo.scss';

function MainVideo({ video }) {
const [currentVideo, setCurrentVideo] = useState(video);

  const { image } = video;

  return (
    <main>
      <video className='video-thumbnail' controls poster={image}>
        <source src='#' type='video/mp4' />
      </video>
    </main>
  );
}

export default MainVideo;