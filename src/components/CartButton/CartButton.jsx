import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <div className='cont'>
       <div>
          <ul>
            <details>
            <summary>Categorias</summary>
            </details>
          <li>Ofertas do dia</li>
          <li>Histórico</li>
          <li>Supermercado
          </li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Contato</li>
         </ul>
        </div>

        <div className='create-count'>
        <li>Crie sua conta</li>
              <li>Entre</li>
              <li>Compras</li>
          <button
            type="button"
            className="cart__button"
            onClick={ () => setIsCartVisible(!isCartVisible) }
          >
            <AiOutlineShoppingCart />
            { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
          </button>

        </div>

    </div>

  );
}

export default CartButton;
