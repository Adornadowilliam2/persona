import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Joker from "./pages/Joker";
import Mona from "./pages/Mona";
import Panther from "./pages/Panther";
import Skull from "./pages/Skull";
import Persona3 from "./pages/Persona3";
import Summary from "./pages/Summary";
import { data, user } from "./index";
import { Link } from "react-router-dom";
import Navbar from "./componets/Navbar";
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
      element: <Skull data={data} />,
    },
    {
      path: "/mona",
      element: <Mona data={data} />,
    },
    {
      path: "/panther",
      element: <Panther data={data} />,
    },
    {
      path: "/persona3",
      element: (
        <>
          <Navbar data={data} />
          <Persona3 data={data} user={user} />
        </>
      ),
    },
    {
      path: "/summary",
      element: (
        <>
          <Navbar data={data} />
          <Summary data={data} user={user} />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
