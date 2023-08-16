import Header from "./components/Header/header"
import Products from "./components/Products/Products"
import Provider from './components/context/Provider'
function App() {


  return (
   
    <Provider>
      <Header/>
      <Products/>

    </Provider>
   
  )
}

export default App