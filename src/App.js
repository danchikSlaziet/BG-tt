import { useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  return (
    <main className='main'>
      <Home isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen}/>
      <Posts />
      <BurgerMenu setBurgerOpen={setBurgerOpen} isBurgerOpen={isBurgerOpen}/>
    </main>
  );
}

export default App;