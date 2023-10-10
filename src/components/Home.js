import React from 'react';

export default function Home() {
  return(
    <section className='home'>
      <div className='home__content'>
        <svg className='home__logo' viewBox="0 0 220 220" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M114 30C75.3401 30 44 61.3401 44 100C44 138.66 75.3401 170 114 170C152.66 170 184 138.66 184 100C184 61.3401 152.66 30 114 30ZM114 130C97.4315 130 84 116.569 84 100C84 83.4314 97.4315 70 114 70C130.569 70 144 83.4315 144 100C144 116.569 130.569 130 114 130Z" fill="rgb(30, 85, 92)">
          </path>
          <mask id="path-2-inside-1_2_1389" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M114 40C75.3401 40 44 71.3401 44 110C44 148.66 75.3401 180 114 180C152.66 180 184 148.66 184 110C184 71.3401 152.66 40 114 40ZM114 140C97.4315 140 84 126.569 84 110C84 93.4314 97.4315 80 114 80C130.569 80 144 93.4315 144 110C144 126.569 130.569 140 114 140Z">
            </path>
          </mask>
          <path d="M52 110C52 75.7583 79.7584 48 114 48L114 32C70.9218 32 36 66.9218 36 110L52 110ZM114 172C79.7583 172 52 144.242 52 110L36 110C36 153.078 70.9218 188 114 188L114 172ZM176 110C176 144.242 148.242 172 114 172L114 188C157.078 188 192 153.078 192 110L176 110ZM114 48C148.242 48 176 75.7583 176 110L192 110C192 66.9218 157.078 32 114 32L114 48ZM76 110C76 130.987 93.0132 148 114 148L114 132C101.85 132 92 122.15 92 110L76 110ZM114 72C93.0132 72 76 89.0132 76 110L92 110C92 97.8497 101.85 88 114 88L114 72ZM152 110C152 89.0132 134.987 72 114 72L114 88C126.15 88 136 97.8497 136 110L152 110ZM114 148C134.987 148 152 130.987 152 110L136 110C136 122.15 126.15 132 114 132L114 148Z" fill="rgb(58, 46, 57)" mask="url(#path-2-inside-1_2_1389)">
          </path>
        </svg>
        <h1 className='home__title'>
          Swipe Through Posts
        </h1>
        <div className='home__buttons-container'>
          <button className='button button_bg_green' type="button">Explore Posts</button>
          <button className='button button_bg_black' type="button">Create Post</button>
        </div>
      </div>
    </section>
  );
}