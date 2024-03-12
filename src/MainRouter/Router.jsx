import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Project from "../Pages/Project/Project";
import ContactUs from "../Pages/ContactUs/ContactUs";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/project',
          element: <Project></Project>
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
        }
      ]
    },
  ]);

export default Router;