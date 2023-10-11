import { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import BurgerMenu from "./components/BurgerMenu";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [preloaderClass, setPreloaderClass] = useState('preloader preloader_active')
  const postsRef = useRef();

  useEffect(() => {
    // timeout просто чтобы видно было прелоадер на локалке
    setTimeout(() => {
      setPreloaderClass('preloader')
    }, '500')
  }, [])

  return (
    <main className='main'>
      <Home isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen}/>
      <Posts postsRef={postsRef} />
      <BurgerMenu postsRef={postsRef} setBurgerOpen={setBurgerOpen} isBurgerOpen={isBurgerOpen}/>
      <Subscribe />
      <Footer />
      <div className={preloaderClass}>
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    </main>
  );
}

export default App;