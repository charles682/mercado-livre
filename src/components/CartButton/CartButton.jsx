import {Container} from './index'
import {BsFillCartCheckFill} from 'react-icons/bs'
function CartButton() {
  return ( 
    <Container>
        <button type='button' className='cart__button'>
        <BsFillCartCheckFill/>
        <span className='cart-status'>1</span>
        </button>
    </Container>
   );
}

export default CartButton;