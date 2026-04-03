import { RouterProvider } from "react-router/dom";
import "./App.css";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Group from "./pages/Group";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-group",
    element: <Group />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/offices-by-cities",
  //   element: ,
  //   children: [
  //     {
  //       path: "/offices-by-cities/:region",
  //       element: ,
  //     },
  //   ],
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
