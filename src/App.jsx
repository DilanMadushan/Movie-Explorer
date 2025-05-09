import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Provider} from "react-redux";
import Store from "./store/Store";
import SearchBar from "./components/SearchBar";
import Movie from "./pages/Movie";
import RootLayout from './components/RootLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import FavouriteMovies from './pages/FavouriteMovies';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>

    },
    {
      path: "/",
      element: <RootLayout/>,
      children  :[
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "movie/:id",
          element: <Movie/>
        },
        {
          path: "favourite",
          element: <FavouriteMovies/>
        }
      ]
    }
  ]);

  return (
    <>
      <Provider store={Store}>
        {/* <NavBar/> */}
        {/* <SearchBar/> */}
          {/* <Home/>
          <Movie/> */}
          <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
