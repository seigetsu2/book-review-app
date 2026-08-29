import { screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import { renderWithClient } from "./utils";
import { SignIn } from "../../src/pages/SignIn";

vi.mock("~/data/api", () => ({
  signIn: vi.fn().mockResolvedValue([{ token: "mockedtoken" }]),
}));

describe("SignIn", () => {
  test("renders SignIn component", () => {
    renderWithClient(<SignIn />);
    expect(screen.getByPlaceholderText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("パスワード")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ログイン" }),
    ).toBeInTheDocument();
  });
});
