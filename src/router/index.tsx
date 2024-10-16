import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import Wrapper from "@/components/common/Wrapper";

import Home from "@/pages/home";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Leaderboards from "@/pages/leaderboards";
import Profile from "@/pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Wrapper>
        <Home />
      </Wrapper>
    ),
  },
  {
    path: "/leaderboards",
    element: (
      <Wrapper>
        <Leaderboards />
      </Wrapper>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Wrapper>
          <Profile />
        </Wrapper>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <Wrapper>
        <Login />
      </Wrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <Wrapper>
        <Register />
      </Wrapper>
    ),
  },
]);

export default router;
