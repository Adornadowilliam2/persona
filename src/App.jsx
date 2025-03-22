import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Joker from "./pages/characters/Joker";
import Mona from "./pages/characters/Mona";
import Panther from "./pages/characters/Panther";
import Skull from "./pages/characters/Skull";

import { data} from "./index";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={data} Link={Link} />,
    },
    {
      path: "/joker",
      element: (
        <>

          <Joker data={data} />
        </>
      ),
    },
    {
      path: "/skull",
      element: (
        <>
       
          <Skull data={data} />
        </>
      ),
    },
    {
      path: "/mona",
      element: (
        <>
      
          <Mona data={data} />
        </>
      ),
    },
    {
      path: "/panther",
      element: (
        <>

          <Panther data={data} />
        </>
      ),
    },
    {
      path:'/contact',
      element: <Contact />
    },
    {
      path:'/features',
      element: <Features />
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
