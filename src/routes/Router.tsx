import { createBrowserRouter, NavLink, Outlet } from "react-router";
import { SignIn } from "~/pages/SignIn";
import { SignUp } from "~/pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavLink to="/signup">sign up</NavLink>
        <NavLink to="/login">login</NavLink>
        <Outlet />
      </div>
    ),
    children: [
      { path: "signup", Component: SignUp },
      { path: "login", Component: SignIn },
    ],
  },
]);
