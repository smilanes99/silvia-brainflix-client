import './NextVideos.scss';
import { Link } from 'react-router-dom';


function NextVideos({ videos }) {


  return (
    <>

      <h4 className='next-videos'>NEXT VIDEOS</h4>
      <div className="video-recap">
        {videos.map((video) => (
          <Link key={video.id} className="video_link" to={`/video/${video.id}`}>
            <div className="video-container">
              <div className='video-img'>
                <img className="video-img" src={video.image} alt="video thumbnail" />
              </div>
              <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-name">{video.channel}</p>
              </div>
            </div>
          </Link>
        ))}

      </div>

    </>
  );
}
export default NextVideos;