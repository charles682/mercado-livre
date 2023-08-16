import styled from"styled-components"
export const Container = styled.div`
.headerSearch{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.logo{
  width: 20%;
}

.disney{
  width: 30%;
}
.search-bar {
  display: flex;
  background-color: white;
  width: 100%;
  height: 55px;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;
}

.search__input {
  width: 500px;
  flex-grow: 1;
  padding: 13px;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500px;
  border-right: 1px solid #ddd;
  
}

.search__button {
  
  background: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}`