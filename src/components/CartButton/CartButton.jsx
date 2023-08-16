import {Container} from './index'
import {BsFillCartCheckFill} from 'react-icons/bs'
function CartButton() {
  return ( 
    <Container>
      <div className='cont'>
        <div>
          <ul>
          <li>Categorias
          </li>
          <li>Ofertas do dia</li>
          <li>Histórico</li>
          <li>Supermercado
          </li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Contato</li>
         </ul>
        </div>
         
         <div className='azure'>
            <li>Crie s aua conta</li>
              <li>Entre</li>
              <li>Compras</li>
              <button type='button' className='cart__button'>
              <BsFillCartCheckFill/>
              <span className='cart-status'>1</span>
              </button>
         </div>
      </div>
    
 
    </Container>
   );
}

export default CartButton;