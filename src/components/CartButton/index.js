import styled from"styled-components"
export const Container = styled.div`
.cont{
 width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div{
  display: flex;

}

div ul{

  display: flex;
  align-items: center;
 
  height: 20px;
  gap: 1rem;
}

.azure{
  display: flex;
  gap: 1rem;
}
.cart__button {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: #333;
}

.cart-status {
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}`