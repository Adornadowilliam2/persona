import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Joker from "./pages/Joker";
import Mona from "./pages/Mona";
import Panther from "./pages/Panther";
import Skull from "./pages/Skull";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/joker",
      element: <Joker />,
    },
    {
      path: "/skull",
      element: <Skull />,
    },
    {
      path: "/mona",
      element: <Mona />,
    },
    {
      path: "/panther",
      element: <Panther />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
