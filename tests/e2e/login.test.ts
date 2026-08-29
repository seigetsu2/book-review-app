import { test, expect } from "@playwright/test";
test("フォームが正しく表示される", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByLabel("メールアドレス")).toBeVisible();
  await expect(page.getByLabel("パスワード")).toBeVisible();
  await expect(page.getByRole("button", { name: "ログイン" })).toBeVisible();
});
test("正しくない形式のメールアドレスを入力した際、警告が表示される", async ({
  page,
}) => {
  await page.goto("/login");

  const emailInput = page.locator("#email");
  await emailInput.fill("foo");
  await page.getByRole("button", { name: "ログイン" }).click();

  const validationMessage = await page.evaluate(() => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    return emailInput.validationMessage;
  });
  expect(validationMessage).toBeTruthy();
  expect(validationMessage.length).toBeGreaterThan(0);
});
test("メールアドレスが空欄のままログインを試行したとき、警告が表示される", async ({
  page,
}) => {
  await page.goto("/login");

  const passwordInput = page.locator("#password");
  await passwordInput.fill("pass");
  await page.getByRole("button", { name: "ログイン" }).click();

  const validationMessage = await page.evaluate(() => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    return emailInput.validationMessage;
  });
  expect(validationMessage).toBeTruthy();
  expect(validationMessage.length).toBeGreaterThan(0);
});
test("パスワードが空欄のままログインを試行したとき、警告が表示される", async ({
  page,
}) => {
  await page.goto("/login");

  const emailInput = page.locator("#email");
  await emailInput.fill("example@test.com");
  await page.getByRole("button", { name: "ログイン" }).click();

  const validationMessage = await page.evaluate(() => {
    const passwordInput = document.getElementById(
      "password",
    ) as HTMLInputElement;
    return passwordInput.validationMessage;
  });
  expect(validationMessage).toBeTruthy();
  expect(validationMessage.length).toBeGreaterThan(0);
});
