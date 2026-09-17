import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "~/pages/Home";
import { SignIn } from "~/pages/SignIn";
import { SignUp } from "~/pages/SignUp";
import { SideBar } from "~/components/SideBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex">
        <SideBar />
        <div className="flex flex-1 items-center justify-center overflow-auto">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      { index: true, Component: Home },
      { path: "signup", Component: SignUp },
      { path: "login", Component: SignIn },
    ],
  },
]);
