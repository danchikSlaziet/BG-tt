import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isBurgerOpen, setBurgerOpen }) {
  const burgerMenuClass = isBurgerOpen ? 'burger-menu burger-menu_active' :  'burger-menu';
  return(
    <div className={burgerMenuClass}>
      <NavLink onClick={() => setBurgerOpen(false)} className='burger-menu__link' to='/'>
        all posts
      </NavLink>
      <NavLink onClick={() => setBurgerOpen(false)} className='burger-menu__link' to='/form'>
        create posts
      </NavLink>
    </div>
  );
}