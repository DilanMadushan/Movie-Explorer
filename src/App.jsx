import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Provider} from "react-redux";
import Store from "./store/Store";

function App() {

  return (
    <>
      <Provider store={Store}>
        <NavBar/>
          <Home/>
      </Provider>
    </>
  )
}

export default App
