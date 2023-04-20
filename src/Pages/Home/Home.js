
import './Home.scss';
import CommentsForm from '../../components/Comments/CommentsForm';
import Comments from '../../components/Comments/Comments';
import { useEffect, useState } from 'react';
import MainVideo from '../../components/HeroVideo/MainVideo';
import VideoDesc from '../../components/HeroVideo/VideoDesc';
import NextVideos from '../../components/VideoRecap/NextVideos'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';


const API_URL = "http://localhost:8080/";
// const API_KEY = "/?api_key=c57957ca-0863-41d1-a9e7-9450b026b2e7";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}videos/${videoId}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [videoId]);


  useEffect(() => {
    axios
      .get(`${API_URL}videos`)
      .then((response) => {
        setVideos(response.data);
        const firstVideo = response.data[0];
        axios
          .get(`${API_URL}videos/${firstVideo.id}`)
          .then((response) => {
            setSelectedVideo(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    if (videoId) {
      axios
        .get(`${API_URL}videos/${videoId}`)
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [videoId]);

  return (
    <div className="App">
      <MainVideo video={selectedVideo} />
      <div className="app__main">
        <div className="main__content">
          <VideoDesc video={selectedVideo} />
          <CommentsForm />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="next__videos">
          <NextVideos videos={videos}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;