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
