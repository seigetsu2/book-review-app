import { Header } from "~/components/Header";
import { getToken, saveToken, deleteToken } from "~/data/storage";
import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUser, type UserData } from "~/data/api";
type Logout = {
  loggedIn: false;
  loginFn: (token: string) => void;
};
type Login = {
  loggedIn: true;
  token: string;
  userData: UserData;
  logoutFn: () => void;
};
type LoginState = Logout | Login;
export const LoginStateContext = createContext<LoginState>({} as LoginState);
export const RootPage = () => {
  const [token, setToken] = useState(getToken() ?? "");
  const loginFn = (token: string) => {
    setToken(token);
  };
  const [userState, setUserState] = useState<LoginState>({
    loggedIn: false,
    loginFn: loginFn,
  });
  const logoutFn = () => {
    deleteToken();
    setToken("");
  };
  const { data, isError } = useQuery({
    queryKey: ["user", token],
    queryFn: () => getUser(token),
    enabled: token != "",
  });

  useEffect(() => {
    if (isError) {
      deleteToken();
    } else if (!data) {
      setUserState({ loggedIn: false, loginFn });
    } else {
      saveToken(token);
      setUserState({ loggedIn: true, token, userData: data, logoutFn });
    }
  }, [data, isError]);

  useEffect(() => {
    const callback = (event: StorageEvent) => {
      console.log(event);
      if (event.key === "token") {
        setToken(localStorage.getItem("token") ?? "");
      }
    };

    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener("storage", callback);
    };
  }, []);
  return (
    <LoginStateContext value={userState}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 items-center justify-center overflow-auto">
          <Outlet />
        </div>
      </div>
    </LoginStateContext>
  );
};
