import React from 'react';
import examplePath from '../images/Kwe3WC2g0G5YlshaqFWnWgy8E.webp';
export { useParams, useNavigate } from 'react-router-dom';

export default function Post({ postInfo }) {

  const params = useParams();
  const navigate = useNavigate();

  function postClickHanlder() {
    navigate('')
  }

  return(
    <div className='post posts__item'>
      <img className='post__img' src={examplePath} alt="avatar author of post" />
      <div className='post__info'>
        <p className='post__index'>
          {postInfo.id}
        </p>
        <p className='post__text'>
          {postInfo.title}
        </p>
      </div>
      <button className='post__button button' type='button'>View post</button>
    </div>
  );
}