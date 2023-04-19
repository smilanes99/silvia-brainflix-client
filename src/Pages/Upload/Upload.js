import './Upload.scss';
import image from '../../assets/images/Upload-video-preview.jpg'
import {useState } from 'react';



function Upload() {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handlePublish = () => {
    setIsSubmitted(true);
    window.alert('Your video has been uploaded successfully!');
    window.location.href = '/';
    
  };

  return (
    <>
      <div className='upload-main'>
        <h1 className='upload-title'>Upload Video</h1>
        <div className='desktop-view-div'>
          <p className='upload-thumbnail-title'>VIDEO THUMBNAIL</p>
          <img className='upload-img-thumbnail' src={image} alt="Video thumbnail" />
          <form>
            <div className='form-main-area'>
              <div className='form-title-area'>
                <label for="video-title">TITLE YOUR VIDEO</label>
              </div>
              <textarea className="video-title-text-box" id="video-title" name="video-title" placeholder="Add a title to your video" required></textarea>
              <div className='form-description-area'>
              <label for="video-description">ADD A VIDEO DESCRIPTION</label>
              </div>
              <textarea className="video-description-text-box" id="video-description" name="video-description" placeholder="Add a video description here"></textarea>

            </div>
          </form>
        </div>
        <div className='button-area'>
          <input className="submit-button" type="button" value="PUBLISH" onClick={handlePublish} />
          <input className="cancel-button" type="button" value="CANCEL" />
        </div>
      </div>

    </>
  );
}

export default Upload;