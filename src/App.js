import { useState, useRef } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import BurgerMenu from "./components/BurgerMenu";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const formRef = useRef();
  const postsRef = useRef();

  return (
    <main id='main' className='main'>
      <Home isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen}/>
      <Posts postsRef={postsRef} formRef={formRef} name='posts'/>
      <BurgerMenu formRef={formRef} setBurgerOpen={setBurgerOpen} isBurgerOpen={isBurgerOpen}/>
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;