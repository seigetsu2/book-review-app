import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("sign in", () => {
  render(<SignInPage />);
  const emailForm = screen.getByPlaceholderText("email");
  expect(emailForm).toBeInTheDocument();
  const passwordForm = screen.getByPlaceholderText("password");
  expect(passwordForm).toBeInTheDocument();
  const singinButton = screen.getByText("サインイン");
  expect(singinButton).toBeInTheDocument();
  const emailLabel = screen.getByText("メールアドレス");
  expect(emailLabel).toBeInTheDocument();
  const passwordLabel = screen.getByText("パスワード");
  expect(passwordLabel).toBeInTheDocument();
});
