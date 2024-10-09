import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import Wrapper from "@/components/common/Wrapper";

import Home from "@/pages/home";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Wrapper>
          <Home />
        </Wrapper>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
