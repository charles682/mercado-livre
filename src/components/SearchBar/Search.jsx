import  {useState} from 'react'; 
import {BsSearch} from 'react-icons/bs';
import {Container} from './index'
 function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return ( 
    <Container>

      <form className='search-bar'>
        <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({target}) => setSearchValue(target.value)} //esta pegando o valor do input que esta sendo digitado
        required
        />
   
        <button type="submit" className="search__button">
          <BsSearch/>
        </button>
      </form>
    </Container>
  );
}

export default SearchBar;