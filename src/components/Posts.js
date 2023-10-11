import React from 'react';
import 'animate.css';
import 'swiper/css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './PostPage';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/action-creators/posts';
import SwiperPosts from './SwiperPosts';

export default function Posts({ formRef, postsRef }) {
  const dispatch = useDispatch();
  const { error, loading, posts } = useSelector((state) => state.postsReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  return(
    <section className='posts'>
      <Routes>
        <Route path='/' element={<SwiperPosts postsRef={postsRef} posts={posts} error={error} loading={loading}/>} />
        <Route path='/:postId' element={<PostPage posts={posts}/>} />
        <Route path='/form' element={<Form postsRef={postsRef} formRef={formRef} posts={posts} />} />
      </Routes>
    </section>
  );
}