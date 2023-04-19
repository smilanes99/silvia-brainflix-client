import '../../components/Comments/Comments.scss';
import image from '../../assets/images/light-gray.png';
import React, { useState } from 'react';




function Comments({selectedVideo}) {
 

  return (
    <div className="comments">
      {selectedVideo.comments?.map((comment) => {
        const date = new Date(comment.timestamp);
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });
        return (
          <div key={comment.id} className="comment">
            <div className="comments-form__avatar-icon">
              <img
                className="comments-form__avatar-icon"
                src={image}
                alt="Avatar Icon"
              />
            </div>
            <div className="comment__data">
              <h3 className="comment__name">{comment.name}</h3>
              <h3 className="comment__date">{formattedDate}</h3>
              <p className="comment__text">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;