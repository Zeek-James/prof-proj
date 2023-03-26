// const { describe, it } = require("node:test");

describe("Home page", () => {
  it("Test h1", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("My First Test");
  });
});
