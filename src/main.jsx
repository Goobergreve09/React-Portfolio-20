import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing components and styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";


// Importing pages
import App from "./App";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Github from './pages/Github'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        path: "/",
        element: <AboutMe />, 
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Github",
        element: <Github/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
