import { screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { renderWithClient } from "./utils";
import { SignUp } from "../../src/pages/SignUp";

vi.mock("~/data/api", () => ({
  signUp: vi.fn().mockResolvedValue([{ token: "mockedtoken" }]),
}));

describe("SignIn", () => {
  test("renders SignIn component", () => {
    renderWithClient(<SignUp />);
    expect(screen.getByPlaceholderText("ユーザー名")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("パスワード")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ユーザー作成" }),
    ).toBeInTheDocument();
  });
});
