import React from 'react';
import { useParams } from 'react-router-dom';
import examplePath from '../images/Kwe3WC2g0G5YlshaqFWnWgy8E.webp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../store/action-creators/comments';
import 'animate.css';

export default function PostPage({ posts }) {
  const params = useParams();
  const currentPost = posts.filter((elem) => {
    return elem.id === Number(params.postId);
  })[0];
  const dispatch = useDispatch();
  const { error, loading, comments } = useSelector((state) => state.commentsReducer);
  useEffect(() => {
    dispatch(fetchComments(Number(params.postId)));
  }, []);

  const loaderClass = loading ? 'loader loader_active' : 'loader';
  const errorClass = error !== null ? 'posts__error posts__error_active' : 'posts__eror';

  return(
    <div id='post-page' className='post-page animate__animated animate__fadeIn'>
      <div className='post-card'>
        <img className='post-card__img' src={examplePath} alt='post img'/>
        <div className='post-card__info-wrapper'>
          <p className='post-card__heading'>{currentPost?.title}</p>
          <p className='post-card__subheading'>{currentPost?.body}</p>
        </div>
      </div>
      <div className={loaderClass}></div>
      <div className={errorClass}>{error}</div>
      <div className='post-page__comments'>
        <p className='post-page__comments-heading'>
          Comments
        </p>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='post-page__comment'>
              <img src={examplePath} className='post-page__avatar' alt='avatar' />
              <div className='post-page__comment-info'>
                <p className='post-page__comment-mail'>{comment.email}</p>
                <p className='post-page__comment-text'>{comment.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}