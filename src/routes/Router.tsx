import {
  createBrowserRouter,
  redirect,
  type MiddlewareFunction,
} from "react-router";

import { Home } from "~/pages/Home";
import { SignIn } from "~/pages/SignIn";
import { SignUp } from "~/pages/SignUp";
import { RootPage } from "~/pages/RootPage";
import { getToken } from "~/data/storage";
const authMiddleware: MiddlewareFunction = () => {
  const token = getToken();
  if (token) {
    throw redirect("/");
  }
};
export const tokenLoader = () => {
  return getToken();
};
export const router = createBrowserRouter([
  {
    path: "/",
    loader: tokenLoader,
    Component: RootPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "signup",
        middleware: [authMiddleware],
        Component: SignUp,
      },
      {
        path: "login",
        middleware: [authMiddleware],
        Component: SignIn,
      },
    ],
  },
]);
