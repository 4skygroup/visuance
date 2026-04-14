import { RouterProvider } from "react-router/dom";
import "./App.css";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Group from "./pages/Group";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/the-group",
    element: <Group />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
