import  {useState, useContext} from 'react'; 
import {BsSearch} from 'react-icons/bs';
import {Container} from './index'
import logo from '../../images/logo.png'
import disney from '../../images/disney.webp'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../context/AppContext'

 function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const {} = useContext(AppContext);

  const handleSearch = async (event) =>{
    event.preventDefault(); // nao recarregar a pagina quando der enter
    
    const products = await fetchProducts(searchValue);
    console.log(products)
    setSearchValue('');
  }



  return ( 
    <Container>
      <div className='headerSearch'>
        <img className='logo' src={logo} alt="" />

          <form className='search-bar' onSubmit={handleSearch}>
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
            <img className='disney' src={disney} alt="" />

      </div>
    </Container>
  );
}

export default SearchBar;