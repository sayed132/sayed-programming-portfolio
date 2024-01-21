import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import PortfolioDetail from "../Pages/Portfolio/PortfolioDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"project/:id",
        element: <PortfolioDetail/>,
      }
    ],
  },
]);

export default router;
