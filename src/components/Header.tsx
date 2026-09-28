import { NavLink } from "react-router";
import { useContext } from "react";
import { LoginStateContext } from "~/pages/RootPage";
export type AppHeaderProps = {
  isLoggedIn: boolean;
  userName?: string;
};
export const Header = () => {
  const loginState = useContext(LoginStateContext);
  return (
    <header className="flex sticky top-0 items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-900">Book review</h1>
      </div>
      {loginState.loggedIn ? (
        <div>
          {loginState.userData.iconUrl && (
            <img
              alt=""
              src={loginState.userData.iconUrl}
              className="size-10 rounded-full object-cover"
            />
          )}
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors"
          >
            <p className="text-xs text-gray-900">
              <strong className="block font-medium">
                {loginState.userData.name}
              </strong>
            </p>
          </a>
        </div>
      ) : (
        <div className="space-x-6">
          <NavLink
            to="/login"
            className="inline-flex items-center justify-center rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="inline-flex items-center justify-center rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none"
          >
            Sign up
          </NavLink>
        </div>
      )}
    </header>
  );
};
