import { NavLink } from "react-router";
export const SideBar = () => {
  return (
    <div
      id="dashboard-sidebar"
      className="h-screen  z-40 flex w-64 -translate-x-full flex-col justify-between overflow-y-auto border-e border-gray-200 bg-white transition-transform duration-300 peer-checked:translate-x-0 lg:shrink-0 lg:translate-x-0 max-lg:rtl:translate-x-full"
    >
      <div className="p-4">
        <nav aria-label="Dashboard" className="mt-4">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-200">
        <NavLink
          to="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160"
            className="size-10 rounded-full object-cover"
          />

          <p className="text-xs text-gray-900">
            <strong className="block font-medium">Priya Natarajan</strong>

            <span>priya@orbitly.com</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
};
