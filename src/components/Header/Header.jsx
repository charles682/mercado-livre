import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/Search";
import {Container} from "./index";


function Header() {
  return ( 
    <Container>
      <header className="header">
        <div className="container">
       
          <SearchBar/>
          <CartButton/>
       
       
        </div>
      </header>
    </Container>
   );
}

export default Header;
