import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function BurgerMenu({ isBurgerOpen, setBurgerOpen, postsRef }) {
  const burgerMenuClass = isBurgerOpen ? 'burger-menu burger-menu_active' :  'burger-menu';
  const navigate = useNavigate();

  // лучше было конечно скроллЭвенты везде однотипно сделать, но я решил разными методами реализовать

  function hanldeLinkClick() {
    navigate('/');
    setBurgerOpen(false);
  }
  function handleNavLinkClick() {
    setBurgerOpen(false);
    // чтобы элемент нашёлся после того, как сработает роутинг
    setTimeout(() => {
      postsRef.current.scrollIntoView({behavior: 'smooth'});
    }, '0')
  }

  return(
    <div className={burgerMenuClass}>
      <Link to='posts' duration={200} smooth={true} onClick={() => hanldeLinkClick()} className='burger-menu__link'>
        all posts
      </Link>
      <NavLink to='/form' onClick={handleNavLinkClick} className='burger-menu__link'>
        create posts
      </NavLink>
    </div>
  );
}