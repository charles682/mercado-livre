import styled from"styled-components"
export const Container = styled.div`
.loading {
  font-size: 2rem;
  margin: 200px auto 0;
  animation: spin 1s linear infinite;
  width: 100%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}`