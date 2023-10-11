export default function Subscribe() {
  return (
    <section className="subscribe">
      <div className='subscribe__container'>
        <p className="subscribe__text">
          Some selling text, subscribe us and blablabla
        </p>
        <div className='subscribe__buttons'>
          <button type="button" className="button button_bg_white button_col_black subscribe__button">
            <a className='button__link' href='https://ya.ru' target='_blank'></a>
            Join Now
          </button>
          <button type="button" className="button button_bg_black subscribe__button">
            <a className='button__link' href='https://ya.ru' target='_blank'></a>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}