import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {
  return (
   
      <header className="header">
        <div>
          <SearchBar />
          <CartButton />
        </div>

    </header>
   
     
  );
}

export default Header;
