import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { SignIn } from "../../src/pages/SignIn";

describe("SignIn", () => {
  test("renders SignIn component", () => {
    render(<SignIn />);
    expect(screen.getByPlaceholderText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("パスワード")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ログイン" }),
    ).toBeInTheDocument();
  });
});
