import { 
  createBrowserRouter,
} from "react-router-dom";

import Layout from "@/page/Layout";
import Login from "@/page/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
