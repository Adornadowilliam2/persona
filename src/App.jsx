import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";


import { data} from "./index";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Details from "./pages/characters/Details";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={data} Link={Link} />,
    },

    {
      path:'/contact',
      element: <Contact />
    },
    {
      path:'/features',
      element: <Features />
    },
    {
      path: "/details",
      element: <Details data={data} />
    }


  ]);
  return <RouterProvider router={router} />;
}

export default App;
