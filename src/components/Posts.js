import React from 'react';
import Post from './Post';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './PostPage';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/action-creators/posts';

export default function Posts() {
  const dispatch = useDispatch();
  const { error, loading, posts } = useSelector((state) => state.postsReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const loaderClass = loading ? 'loader loader_active' : 'loader';
  const errorClass = error !== null ? 'posts__error posts__error_active' : 'posts__eror';

  return(
    <section className='posts'>
      <Routes>
        <Route path='/' element={
          <div id='posts' className='posts__container'>
            <div className={loaderClass}></div>
            <div className={errorClass}>{error}</div>
            <Swiper
              loop
              modules={[Navigation]}
              rewind={true}
              spaceBetween={50}
              slidesPerView={3}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              <div className="swiper-button-prev">
                <div className="arrow-slider">
                  <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                      <polygon className="arrow-slider-pl" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                      <polygon className="arrow-slider-pl-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                      <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="swiper-button-next">
                <div className="arrow-slider">
                  <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g>
                      <polygon className="arrow-slider-pl" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                      <polygon className="arrow-slider-pl-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                      <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              {posts.map((post) => {
                return (
                  <SwiperSlide key={post.id}>
                    <Post postInfo={post} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        } />
        <Route path='/:postId' element={<PostPage posts={posts}/>} />
        <Route path='/form' element={<Form posts={posts} />} />
      </Routes>
    </section>
  );
}