import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Joker from "./pages/Joker";
import Mona from "./pages/Mona";
import Panther from "./pages/Panther";
import Skull from "./pages/Skull";

import { data} from "./index";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
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
          <Navbar data={data} />
          <Joker data={data} />
        </>
      ),
    },
    {
      path: "/skull",
      element: (
        <>
          <Navbar data={data} />
          <Skull data={data} />
        </>
      ),
    },
    {
      path: "/mona",
      element: (
        <>
          <Navbar data={data} />
          <Mona data={data} />
        </>
      ),
    },
    {
      path: "/panther",
      element: (
        <>
          <Navbar data={data} />
          <Panther data={data} />
        </>
      ),
    },

  ]);
  return <RouterProvider router={router} />;
}

export default App;
