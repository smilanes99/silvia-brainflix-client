import './VideoDesc.scss';
import { useState, useEffect } from 'react';
import LikesImg from '../../assets/icons/likes.svg';
import ViewsImg from '../../assets/icons/views.svg'

function VideoDesc({ video }) {
  const [currentVideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    setCurrentVideo(video);
  }, [video]);

  const { title, channel, views, likes, timestamp, description } = currentVideo;

  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  return (
    <main>
      <div className='video-text-desktop'>
        <h2 className='video-title-hero'>{title}</h2>
        <div className="video-details-hero">
          <div className="channel-date">
            <h3 className='channel'>By {channel}</h3>
            <h3 className='date-string'>{dateString}</h3>
          </div>
          <div className='views-likes'>
            <h3 className='views'><img src={ViewsImg} alt="views" />  {views}</h3>
            <h3 className='likes'><img src={LikesImg} alt="likes" /> {likes}</h3>
          </div>
        </div>
        <div className='description'>
          <h3>{description}</h3>
        </div>
      </div>
    </main>
  );
}

export default VideoDesc;