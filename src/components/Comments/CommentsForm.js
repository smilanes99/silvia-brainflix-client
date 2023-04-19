import '../../components/Comments/CommentsForm.scss';
import avatar from "../../assets/images/mohan.jpg";



function CommentsForm() {
  return (
    <>
      <div className="comments-form">
        <h4 className="comments-form__total">3 Comments</h4>
        <div className="comments-form__container">
          <form>
            <div className="comments-form__wrapper">
              <div className="comments-form__avatar-icon">
                <img className="comments-form__avatar-icon" src={avatar} alt="Avatar Icon" />
              </div>
              <label>
                <div className="comments-form__title">
                  JOIN THE CONVERSATION
                </div>
                <div className='comments-form__comment-box-btn-container'>
                    <textarea className="comments-form__comment-box" type="text" placeholder="Add a new comment" name="comment"></textarea>
                  <div className="btn-container">
                    <button className='btn' type="button">COMMENT</button>
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>

  );
}


export default CommentsForm;