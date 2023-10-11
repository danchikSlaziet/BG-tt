import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/action-creators/posts';
import 'animate.css';

export default function Form({ posts, formRef, postsRef }) {
  const [values, setValues] = useState({title: '', text: ''});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitHandler(evt) {
    evt.preventDefault();
    if (isValid()) {
      // на jsonPlaceholder псевдо Post запросы, поэтому тут тупо добавление в "локальный стейт", а не post-запрос
      const newPost = {
        id: posts.length + 1,
        title: values.title,
        body: values.text
      }
      dispatch(addPost(newPost));
      setError('');
      navigate('/');
      setTimeout(() => {
        postsRef.current.scrollIntoView({behavior: 'smooth'})
      }, '0')
    }
    else {
      setError('заполните все поля');
    }
  }
  function isValid() {
    if (values.title.trim().length === 0 || values.text.trim().length === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  return(
      <form id='add-form' ref={formRef} onSubmit={submitHandler} className='add-form animate__animated animate__fadeInLeft'>
        <input name='title' placeholder='enter post title' type='text' className='add-form__input add-form__input_type_title' value={values.title} onChange={(evt) => setValues({...values, title: evt.target.value})}/>
        <textarea name='text' placeholder='enter post text' className='add-form__input add-form__input_type_text' value={values.text} onChange={(evt) => setValues({...values, text: evt.target.value})}/>
        <p className='add-form__error'>{error}</p>
        <button className='add-form__button button' type='submit'>
          submit
        </button>
      </form>
  );
}