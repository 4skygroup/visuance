import { RouterProvider } from "react-router/dom";
import "./App.css";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Group from "./pages/Group";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VideoPhotography from "./pages/Services/VideoPhotography";
import BrandStrategy from "./pages/Services/PrintDesign";
import PrintDesign from "./pages/Services/PrintDesign";
import AiInnovation from "./pages/Services/AiInnovation";
import DigitalProduct from "./pages/Services/DigitalProduct";
import BrandStorytelling from "./pages/Services/BrandStorytelling";
import GrowthTechnology from "./pages/Services/GrowthTechnology";
import CreativeTechnology from "./pages/Services/CreativeTechnology";
import WebDesign from "./pages/Services/WebDesign";

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
    path: "/brand-strategy",
    element: <BrandStrategy />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  },
  {
    path: "/video-photography",
    element: <VideoPhotography />,
  },
  {
    path: "/print-design",
    element: <PrintDesign />,
  },
  {
    path: "/ai-innovation",
    element: <AiInnovation />,
  },
  {
    path: "/digital-product",
    element: <DigitalProduct />,
  },
  {
    path: "/brand-storytelling",
    element: <BrandStorytelling />,
  },
  {
    path: "/growth-technology",
    element: <GrowthTechnology />,
  },
  {
    path: "/creative-technology",
    element: <CreativeTechnology />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
