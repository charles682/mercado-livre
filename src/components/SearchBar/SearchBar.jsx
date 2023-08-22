import { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';
import logo from '../../../public/logo.png'
import signature from '../../../public/D_NQ_749624-MLA71075230097_082023-OO.webp'

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();  // não deixa a pagina recarregar de novo
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <div className='headerSearch'>
    <img className='logo' src={logo} alt="" />
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={ ({ target }) => setSearchValue(target.value) }//esta pegando o valor do input que esta sendo digitado
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
    <img className='disney' src={signature} alt="" />

    </div>
  );
}

export default SearchBar;
