export default function Footer() {
  return(
    <footer className="footer">
      <div className='footer__container'>
        <div className="footer__images">
          <svg className="footer__svg" viewBox="0 0 200 200" fill="none"><path d="M200 200L200 6.10352e-05L0 200L200 200Z" fill="rgb(255, 255, 255)"></path></svg>
          <svg className="footer__svg" viewBox="0 0 200 200" fill="none"><path opacity="0.5" d="M200 200L200 3.49691e-05L-4.45153e-06 200L200 200Z" fill="rgb(255, 255, 255)"></path><path opacity="0.5" d="M-8.74228e-06 200L200 200L0 -8.74228e-06L-8.74228e-06 200Z" fill="rgb(244, 216, 205)"></path></svg>
          <svg className="footer__svg" viewBox="0 0 200 200" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 77.6142 122.386 100 150 100ZM50 200C77.6142 200 100 177.614 100 150C100 122.386 77.6142 100 50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200Z" fill="rgb(244, 216, 205)"></path><path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z" fill="rgb(255, 255, 255)"></path></svg>
          <svg className="footer__svg" viewBox="0 0 200 200" fill="none"><path d="M0 100C0 155.228 44.7715 200 100 200V0C44.7715 0 0 44.7715 0 100Z" fill="rgb(255, 255, 255)"></path><path d="M100 100C100 155.228 144.772 200 200 200V0C144.772 0 100 44.7715 100 100Z" fill="rgb(244, 216, 205)"></path></svg>
        </div>
        <p className="footer__copyright">
          © Posts Slider 2023
        </p>
      </div>
    </footer>
  );
}