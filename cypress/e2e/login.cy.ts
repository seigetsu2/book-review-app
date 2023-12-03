describe("signin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("signin with correct email and password.", () => {
    cy.get(`[data-cy=login-form]`).find("[data-cy=email]").type(`abcd@abcd.jp`);
    cy.get(`[data-cy=login-form]`).find("[data-cy=password]").type("password");
    cy.get(`[data-cy=login-form]`)
      .submit()
      .next()
      .should("contain", "ログインに失敗しました");
  });
  it("signin with incorrect email and password.", () => {
    cy.get(`[data-cy=login-form]`).find("[data-cy=email]").type(`foo`);
    cy.get(`[data-cy=login-form]`).find("[data-cy=password]").type("password");
    cy.get(`[data-cy=login-form]`)
      .submit()
      .next()
      .should("contain", "正しい形式のメールアドレスを入力してください");
  });
});
